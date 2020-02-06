import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './explore.css';
import { Container, Row, Col } from 'reactstrap';
import { Element } from '../../components/element';
import { RouteComponentProps } from 'react-router';
import { AppDispatch } from '../..';
import * as ExploreStore from '../../store/explore-store';
import ApplicationState from '../../store/application-state';

interface IProps extends RouteComponentProps {
    onPageInit: () => void;
}

const Explore = (props: IProps) => {
    useEffect(() => {
        document.title = 'Explore';
        props.onPageInit();
    }, []);

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

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onPageInit: () => {
        // TODO: dispatch event
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {};
};

const ExplorePage = connect(() => mapStateToProps, mapDispatchToProps)(Explore);

export default ExplorePage;