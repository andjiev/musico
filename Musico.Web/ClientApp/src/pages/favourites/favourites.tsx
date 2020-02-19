import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';
import * as FavouritesStore from '..//../store/favourites-store';
import { Track } from '../../lib/models';
import { Col, Container, Row } from 'reactstrap';
import { Element } from '../../components/element';

interface IFavouritesProps extends RouteComponentProps {
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

    return (
        <>
            <div className="elementsContainer">
                <Container >
                    <audio src={url} autoPlay hidden></audio>
                    <Row className="p3">
                        {props.tracks.map(x => {
                            return (
                                <Col key={x.id} xs={12} md={4} lg={3}>
                                    <Element
                                        name={x.name}
                                        artist={x.artists.map(x => x.name).join(', ')}
                                        imageUrl={x.album.images.length ? x.album.images[0].url : undefined}
                                        buttonText="Delete"
                                        disablePreview={!x.url}
                                        previewClicked={x.url === url}
                                        onPreviewClick={() => setUrl(x.url === url ? '' : x.url)}
                                        onButtonClick={() => props.onDeleteTrack(x.id)} />
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
        tracks: state.favouritesStore.tracks
    };
};

const FavouritesPage = connect(() => mapStateToProps, mapDispatchToProps)(Favourites);

export default FavouritesPage;