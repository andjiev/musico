import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { GET_ALBUM_TRACKS, ROUTES } from '../../consts';
import { Track, AlbumTrackResult } from '../../lib/models';
import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';
import * as SharedStore from '../../store/shared-store';
import { useQuery } from '@apollo/react-hooks';
import { Container, Row, Col } from 'reactstrap';
import BeatLoader from "react-spinners/BeatLoader";
import { ListItem } from '../../components/list-item';

interface IProps extends RouteComponentProps<{ id: string }> {
    searchText: string;

    onPageInit: () => void;
    onSaveTrack: (track: Track) => void;
}

const Albums = (props: IProps) => {
    useEffect(() => {
        document.title = 'Album songs';
        props.onPageInit();
    }, []);

    const { data, loading, error } = useQuery<AlbumTrackResult>(GET_ALBUM_TRACKS(props.match.params.id));
    const [url, setUrl] = React.useState('');

    if (loading) {
        return (
            <>
                <Container style={{ marginTop: '80px' }}>
                    <Row className="justify-content-center">
                        <BeatLoader size={40} color={'#013E5E'} loading />
                    </Row>
                </Container>
            </>
        );
    }
    if (error) return <p>No new releases found</p>;

    const albumName = data?.albumTracks[0].album.name;
    const filteredTracks = data?.albumTracks.filter(x =>
        x.name.toLocaleLowerCase().startsWith(props.searchText.toLocaleLowerCase()) ||
        !!x.artists.filter(x => x.name.toLocaleLowerCase().startsWith(props.searchText.toLocaleLowerCase())).length);

    return (
        <>
            <div className="elementsContainer">
                <Container >
                    <Row className="p3">
                        <Col xs={6}>
                            <button className="btn btn-primary pull-left" onClick={() => props.history.push(ROUTES.POPULAR)}>
                                <i className="fa fa-angle-left"></i> &nbsp;
                                Go back
                                </button>
                        </Col>
                        <Col xs={6}>
                            <h4 className="pull-right">{`Album "${albumName}":`}</h4>
                        </Col>
                    </Row>

                </Container>
                <Container >
                    <audio src={url} autoPlay hidden></audio>
                    <Row className="pt-3">
                        {filteredTracks?.map((x, index) => {
                            index++;
                            return (
                                <Col key={x.id} xs={12} md={12} lg={12}>
                                    <ListItem
                                        name={x.name.length > 14 ? x.name.substring(0, 14) + '...' : x.name}
                                        artist={x.artists.map(x => x.name).join(', ').length > 14 ? x.artists.map(x => x.name).join(', ').substring(0, 14) + '...' : x.artists.map(x => x.name).join(', ')}
                                        imageUrl={x.album.images.length ? x.album.images[0].url : undefined}
                                        buttonText="Save"
                                        buttonClass="btn-block"
                                        buttonIcon="fa fa-star"
                                        id={index + '.'}
                                        disablePreview={!x.url}
                                        previewClicked={x.url === url}
                                        onPreviewClick={() => setUrl(x.url === url ? '' : x.url)}
                                        onButtonClick={() => props.onSaveTrack(x)}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onPageInit: () => {
        dispatch(SharedStore.setSearchText(''));
    },
    onSaveTrack: (track: Track) => {
        dispatch(SharedStore.onSaveTrack(track));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {
        searchText: state.sharedStore.searchText
    };
};

const AlbumsPage = connect(() => mapStateToProps, mapDispatchToProps)(Albums);

export default AlbumsPage;

