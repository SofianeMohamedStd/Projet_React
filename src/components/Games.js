import React, {Component, useState} from 'react';
import {  Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
class Games extends Component {
    constructor(props){
        super(props)
        this.state = {
            postItem: null,
            isFlipped: false

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    setPostStateOnProps(){
        const {post} = this.props
        this.setState({
            postItem: post
        })
    }
    componentDidUpdate(prevProps, prevState, snapshop){
        if (this.props !== prevProps){
           this.setPostStateOnProps()
        }
    }
    componentDidMount(){
        this.setPostStateOnProps()
    }

  
       
       render(){
        const {postItem} = this.state

        return(
            
            
             <>
            {postItem !== null
             ?
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

            <div className={"col-md-12"}>
             <div className={"card"} >
                 <img style={{width: "350px", height:"300px"}} src={postItem.image} className={"card-img-top"} alt="..."></img>
                <div className={'card-body text-center'} >


                    <button class="btn btn-info" onClick={this.handleClick}>discover</button>
               </div>
             </div>
            </div>

                <div className={"col-md-12"}>
                    <div className={"card"} >
                        <img style={{width: "350px", height:"300px"}} src={postItem.image} className={"card-img-top"} alt="..."></img>
                        <div className={'card-body text-center'} >
                            <p > Titre: <strong>{postItem.titre}</strong> </p>
                            <p > Année: <strong>{postItem.annee}</strong>  </p>
                            <ul className="scroll-list">

                                <Link
                                    to={{ pathname: `/game/${postItem.id}`.replace(/\s/g, '')}}
                                >
                                    <button type="button" className="btn btn-dark">see More</button>

                                </Link>

                            </ul>
                            <ul className="scroll-list">

                                <Link
                                    to={{ pathname: `/editGame/${postItem.id}`.replace(/\s/g, '')}}
                                >
                                    <button type="button" className="btn btn-dark">Edit/Delete game</button>

                                </Link>

                            </ul>
                        </div>
                    </div>
                    <button className={"btn btn-info"} onClick={this.handleClick}>hide</button>
                </div>
                </ReactCardFlip>
             : ''}
            </>
            
        )

        }
    
}

export default Games;