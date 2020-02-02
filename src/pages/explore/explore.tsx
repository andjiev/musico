import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { SpotifyResult } from '../../lib/models';
import { GET_TRACK } from '../../consts';

const Explore = () => {
    const { data, loading, error } = useQuery<SpotifyResult>(GET_TRACK);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error</p>;
    }

    return (
        <>
            <h1>{data?.data.track.name}</h1>
        </>
    );
};

export default Explore;