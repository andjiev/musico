import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './explore.css';
import Header from '../../components/header';
import { Container, Row, Col } from 'reactstrap';
import { Element } from '../../components/element';
import { RouteComponentProps } from 'react-router';
import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';
import * as ExploreStore from '../../store/explore-store';
import { useQuery } from '@apollo/react-hooks';
import { GET_TRACKS } from '../../consts';
import { TracksResult, Track } from '../../lib/models';
import BeatLoader from "react-spinners/BeatLoader";
import logo from '../../assets/logo.png';
// import ReactAudioPlayer from 'react-audio-player';

interface IProps extends RouteComponentProps {
    searchText: string;

    onSaveTrack: (track: Track) => void;
}

const Explore = (props: IProps) => {
    useEffect(() => {
        document.title = 'Explore';
    }, []);

    const { data, loading, error } = useQuery<TracksResult>(GET_TRACKS(props.searchText));
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

    if (error) {
        return (
            <>
                <img src={logo} width="50%" className="logo-main" alt="logo-main"/>
           </>
        );
    }

    return (
        <>
            <div className="elementsContainer">
                <Container >
                    <audio src={url} autoPlay hidden></audio>
                    <h4>Search results:</h4>
                    <Row className="p3">
                        {data?.tracks.map(x => {
                            return (
                                <Col key={x.id} xs={12} md={4} lg={3}>
                                    <Element
                                        name={x.name.length > 14 ? x.name.substring(0,14)+'...' : x.name}
                                        artist={x.artists.map(x => x.name).join(', ').length > 14 ? x.artists.map(x => x.name).join(', ').substring(0,14)+ '...' : x.artists.map(x => x.name).join(', ')}
                                        imageUrl={x.album.images.length ? x.album.images[0].url : undefined}
                                        buttonText="Save"
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
    onSaveTrack: (track: Track) => {
        dispatch(ExploreStore.onSaveTrack(track));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {
        searchText: state.exploreStore.searchText
    };
};

const ExplorePage = connect(() => mapStateToProps, mapDispatchToProps)(Explore);

export default ExplorePage;