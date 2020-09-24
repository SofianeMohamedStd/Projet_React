import React, {Component} from 'react';
import axios from "axios";
import {API_BASE_URL} from "../config";
import Comments from "./Comments";

class ListComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            loading: true,
        }


    }
    componentDidMount() {



        axios({
            url: API_BASE_URL+"/gameC/",
            method: 'GET',
        })
            .then(response => {
                this.setState({List: response.data,loading: false});
            })
            .catch(err => {
                console.error(err);
            });

    }
    render() {
        const urGG = this.props.children;

        return(
            <>
            <div className={"album py-5 bg-light"}>
                <div className={"container"}>
                    <div className={"row"}>
                        {this.state.List.map((game, index) => {
                            return <Comments
                                post={game}
                                URG={urGG}
                                key={`post-list-key ${index}`}
                            />
                        })}

                    </div>
                </div>
            </div>

            </>
        )
    }
}
export default ListComment;