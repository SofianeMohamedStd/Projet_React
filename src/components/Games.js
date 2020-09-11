import React,{Component} from 'react';
import {  Link } from "react-router-dom";

class Games extends Component {
    constructor(props){
        super(props)
        this.state = {
            postItem: null
        }
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
            <div className={"col-md-4"}>
             <div className={"card"} style={{width: "300px"}}>
                 <img src={postItem.image} className={"card-img-top"} alt="..."></img>
                <div className={'card-body text-center'} >
                    <p className={'card-title'}> Titre: <strong>{postItem.titre}</strong> </p>
                    <p className={"list-group-item"}>Categorie: <strong>{postItem.categorie}</strong> </p>
                    <p className={"list-group-item"}> Année: <strong>{postItem.annee}</strong>  </p>
                    <p className={"list-group-item"}> studio: <strong>{postItem.studio}</strong> </p>
                    <ul className="scroll-list">
            
                        <Link
                            to={{ pathname: `/post/${postItem.id}`, state: postItem}}
                        >
                            <h5>see More...</h5>
              
                        </Link>
        
                    </ul>
               </div>
             </div>
            </div>
             : ''}
            </>
            
        )

        }
    
}

export default Games;