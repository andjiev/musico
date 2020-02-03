import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { SpotifyResult } from '../../lib/models';
import { GET_TRACK } from '../../consts';

import { Container, Row, Col } from 'reactstrap';
import { Element } from '../../components/element';
import './explore.css';

const Explore = () => {
    // const { data, loading, error } = useQuery<SpotifyResult>(GET_TRACK);

    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    // if (error) {
    //     return <p>Error</p>;
    // }

    return (
        <>
            <div className="elementsContainer">
                <Container >
                    <Row className="p3">
                        <Col xs={12} md={4} lg={3}><Element name="Song Title" artist="Artist01" /></Col>
                        <Col xs={12} md={4} lg={3}><Element name="Song Title" artist="Artist01" /></Col>
                        <Col xs={12} md={4} lg={3}><Element name="Song Title" artist="Artist01" /></Col>
                        <Col xs={12} md={4} lg={3}><Element name="Song Title" artist="Artist01" /></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Explore;