import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { GET_NEW_RELEASES } from '../../consts';
import { Track, AlbumResult } from '../../lib/models';
import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';
import * as ExploreStore from '../../store/explore-store';
import { useQuery } from '@apollo/react-hooks';
import { Container, Row, Col } from 'reactstrap';
import { Element } from '../../components/element';

interface IProps extends RouteComponentProps {
    onSaveTrack: (track: Track) => void;
}

const Popular = (props: IProps) => {
    useEffect(() => {
        document.title = 'Popular';
    }, []);

    const { data, loading, error } = useQuery<AlbumResult>(GET_NEW_RELEASES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>No new releases found</p>;

    return (
        <>
            <div className="elementsContainer">
                <Container>
                    <Row className="p3">
                        {data?.newReleases.map(x => {
                            return (
                                <Col key={x.id} xs={12} md={4} lg={3}>
                                    <Element
                                        name={x.name}
                                        artist={x.artists.map(x => x.name).join(', ')}
                                        imageUrl={x.images.length ? x.images[0].url : undefined}
                                        buttonText="Save"
                                        onButtonClick={() => { }} />
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
    onSaveTrack: (track: Track) => {
        // onSaveTrack should be moved to shared store
        dispatch(ExploreStore.onSaveTrack(track));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {};
};

const PopularPage = connect(() => mapStateToProps, mapDispatchToProps)(Popular);

export default PopularPage;

