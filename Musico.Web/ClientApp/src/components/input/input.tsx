import React from 'react';
import { connect } from 'react-redux';

import '../input/input.css';
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
            <span className="buttonSubmit">
                <button type="submit"><i className="fa fa-search"></i></button>
            </span>
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

const Input = connect(() => mapStateToProps, mapDispatchToProps)(SearchBar);

export default Input;
