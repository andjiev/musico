import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { GET_NEW_RELEASES, ROUTES } from '../../consts';
import { Track, AlbumResult } from '../../lib/models';
import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';
import * as SharedStore from '../../store/shared-store';
import { useQuery } from '@apollo/react-hooks';
import { Container, Row, Col } from 'reactstrap';
import { Element } from '../../components/element';
import BeatLoader from "react-spinners/BeatLoader";

interface IProps extends RouteComponentProps {
    searchText: string;

    onPageInit: () => void;
    onSaveTrack: (track: Track) => void;
}

const Popular = (props: IProps) => {
    useEffect(() => {
        document.title = 'Popular';
        props.onPageInit();
    }, []);

    const { data, loading, error } = useQuery<AlbumResult>(GET_NEW_RELEASES);

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

    const filteredReleases = data?.newReleases.filter(x =>
        x.name.toLocaleLowerCase().startsWith(props.searchText.toLocaleLowerCase()) ||
        !!x.artists.filter(x => x.name.toLocaleLowerCase().startsWith(props.searchText.toLocaleLowerCase())).length);

    return (
        <>
            <div className="elementsContainer">
                <Container>
                    <h4>New releases:</h4>
                    <Row className="p3">
                        {filteredReleases?.map(x => {
                            return (
                                <Col key={x.id} xs={12} md={4} lg={3}>
                                    <Element
                                        name={x.name.length > 14 ? x.name.substring(0, 14) + '...' : x.name}
                                        artist={x.artists.map(x => x.name).join(', ').length > 14 ? x.artists.map(x => x.name).join(', ').substring(0, 14) + '...' : x.artists.map(x => x.name).join(', ')}
                                        imageUrl={x.images.length ? x.images[0].url : undefined}
                                        buttonText="Save"
                                        showOpenAlbumButton
                                        onOpenAlbumClick={() => props.history.push(`albums/${x.id}`)}
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

const PopularPage = connect(() => mapStateToProps, mapDispatchToProps)(Popular);

export default PopularPage;

