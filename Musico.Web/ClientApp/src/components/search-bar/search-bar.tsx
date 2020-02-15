import React from 'react';
import { connect } from 'react-redux';

import '../search-bar/search-bar.css';
import * as ExploreStore from '../../store/explore-store';
import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';

export interface IProps {
    onInputChange: (text: string) => void;
}

const SearchBar = (props: IProps) => {
    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search.."
                name="search"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    props.onInputChange(event.target.value);
                }} ></input>
        </div>
    );
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onInputChange: (text: string) => {
        dispatch(ExploreStore.setSearchText(text));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {};
};

const SearchBarComponent = connect(() => mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBarComponent;
