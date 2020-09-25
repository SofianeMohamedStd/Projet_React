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

console.log(this.props.studio)
        const loading = this.state.loading;
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
                                <input className={"form-input"} type="text" name="titre" value={titre} placeholder={"titre"}
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
                        <div className="col-xs-6 col-sm-6 fl_icon">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect2">Studio</label>
                                <select multiple className="form-control" name="studio" value={studio}  onChange={this.changeHandler}>
                                    { this.state.List.map(user =>
                                        <option>{user.id}</option>
                                    )}
                                </select>
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