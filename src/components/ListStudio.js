import React, {Component} from 'react';
import axios from "axios";
import {API_BASE_URL} from "../config";
import Studio from "./Studio";


class ListStudio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            loading: true,
        }


    }
    componentDidMount () {
        this.getGames();
    }
    async getGames() {
        axios.get(API_BASE_URL + '/studio').then(List => {
            this.setState({List: List.data,loading: false})
        })
    }
    render() {
        const loading = this.state.loading;

        return(
            <>
                {loading ? (
                    <div className={'row text-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <div className={'row'}>
                        { this.state.List.map(user =>
                            <div className="col-md-10 offset-md-1 row-block" key={user.id}>
                                <ul id="sortable">
                                    <li>
                                        <div className="media">

                                            <div className="media-body">
                                                <h4>{user.id}</h4>
                                                <p>{user.NomStudio}</p>
                                            </div>
                                            <div className="media-right align-self-center">
                                                <a href="#" className="btn btn-default">Contact Now</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}
                {loading ? (
                    <div className={'row text-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <div className={'row'}>
                        { this.state.List.map(user =>
                            <div className="col-md-10 offset-md-1 row-block" key={user.id}>
                                <ul id="sortable">
                                    <li>
                                        <div className="media">

                                            <div className="media-body">
                                                <h4>{user.id}</h4>
                                                <p>{user.NomStudio}</p>
                                            </div>
                                            <div className="media-right align-self-center">
                                                <a href="#" className="btn btn-default">Contact Now</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </>
        )
    }
}
export default ListStudio;