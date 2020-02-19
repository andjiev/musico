import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';
import * as FavouritesStore from '../../store/favourites-store';
import { Track } from '../../lib/models';
import { Col, Container, Row } from 'reactstrap';
import { ListItem } from '../../components/list-item';

interface IFavouritesProps extends RouteComponentProps {
    searchText: string;
    tracks: Track[];

    onPageInit: () => void;
    onDeleteTrack: (id: string) => void;
}

const Favourites = (props: IFavouritesProps) => {
    useEffect(() => {
        document.title = 'Favourites';
        props.onPageInit();
    }, []);

    const [url, setUrl] = React.useState('');
    const filteredTracks = props.tracks.filter(x =>
        x.name.toLocaleLowerCase().startsWith(props.searchText.toLocaleLowerCase()) ||
        !!x.artists.filter(x => x.name.toLocaleLowerCase().startsWith(props.searchText.toLocaleLowerCase())).length);

    return (
        <>
            <div className="elementsContainer">
                <Container >
                    <audio src={url} autoPlay hidden></audio>
                    <h4>Favourite songs:</h4>
                    <Row className="p3">
                        {filteredTracks.map((x, index) => {
                            index++;
                            return (
                                <Col key={x.id} xs={12} md={12} lg={12}>
                                    <ListItem
                                        name={x.name.length > 14 ? x.name.substring(0, 14) + '...' : x.name}
                                        artist={x.artists.map(x => x.name).join(', ').length > 14 ? x.artists.map(x => x.name).join(', ').substring(0, 14) + '...' : x.artists.map(x => x.name).join(', ')}
                                        imageUrl={x.album.images.length ? x.album.images[0].url : undefined}
                                        buttonText="Delete"
                                        id={index + '.'}
                                        disablePreview={!x.url}
                                        previewClicked={x.url === url}
                                        onPreviewClick={() => setUrl(x.url === url ? '' : x.url)}
                                        onButtonClick={() => props.onDeleteTrack(x.id)}
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
        dispatch(FavouritesStore.onPageInit());
    },
    onDeleteTrack: (id: string) => {
        dispatch(FavouritesStore.onDeleteTrack(id));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {
        searchText: state.sharedStore.searchText,
        tracks: state.favouritesStore.tracks
    };
};

const FavouritesPage = connect(() => mapStateToProps, mapDispatchToProps)(Favourites);

export default FavouritesPage;