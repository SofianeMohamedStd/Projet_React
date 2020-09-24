import React,{Component} from 'react';
import axios from 'axios';
import {API_BASE_URL} from "../config";
import {Redirect} from "react-router-dom";
import ListStudio from "./ListStudio";
export class CreateGame extends Component{
    constructor(props) {
        super(props);

        this.state = {

            titre: '',
            annee:'',
            studio:'',
            categorie:'',
            image:'',


        }
        this.etat = {
            postItem: null,
        }

    }
    setPostStateOnProps(){
        const {post} = this.props
        this.setState({
            postItem: post,


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

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = () => {
        //e.preventDefault()
        console.log(this.state)
        //const game = this.getGame();
        axios.post(API_BASE_URL + `/game/ajout/${this.state.studio}/${this.state.categorie}`, this.state)
            .then( () => {
                return <Redirect to={`/`}/>
            })
            .catch(error => {
                console.log(error)
            })

    }


    render(){
        const {titre, annee, studio, categorie, image} = this.state
        const {postItem} = this.etat
        console.log(this.etat)
        console.log(this.props.post);
        return(
            <div>
                <div>
                    <h2>Ajouter un nouveau jeu</h2>
                </div>
                <form className={"form-block"} onSubmit={this.submitHandler}>
                    <div className={"row"}>
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group fl_icon">
                                <div className={"icon"}><i className={"fa fa-user"}/></div>
                                <input className={"form-input"} type="text" name="titre" value={titre} placeholder={"Titre"}
    onChange={this.changeHandler}/>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 fl_icon">
                            <div className="form-group fl_icon">
                                <div className="icon"><i className="fa fa-envelope-o"/></div>
                                <input className={"form-input"} type="text" name="annee" value={annee} placeholder={"annee"}
    onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 fl_icon">
                            <div className="form-group fl_icon">
                                <div className="icon"><i className="fa fa-envelope-o"/></div>
                                <input className={"form-input"} type="text" name="studio" value={studio} placeholder={"studio"}
    onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 fl_icon">
                            <div className="form-group fl_icon">
                                <div className="icon"><i className="fa fa-envelope-o"/></div>
                                <input className={"form-input"} type="text" name="categorie" value={categorie} placeholder={"categorie"}
                                       onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 fl_icon">
                            <div className="form-group fl_icon">
                                <div className="icon"><i className="fa fa-envelope-o"/></div>
                                <input className={"form-input"} type="text" name="image" value={image} placeholder={"image"}
    onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div className={"col-md-12 text-center"}>
                            <button className="btn btn-primary pull-center" type="submit">Ajouter</button>
                        </div>
                    </div>
                </form>


            </div>


        )



    }

}
export default CreateGame;