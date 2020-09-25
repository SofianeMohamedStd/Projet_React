import React,{Component} from "react";
import axios from "axios";
import {API_BASE_URL} from "../config";
import {Redirect} from "react-router-dom";

class EditGame extends Component{
    constructor(props) {
        super(props)

        this.input=React.createRef()
        this.state={
            titre: '',
            annee:'',
            studio:'',
            categorie:'',
            image:'',
            games:[],
            studios:{}
        }
    }

    getGame(){

        return this.props.match.params.id;
    }

    componentDidMount() {

        const game = this.getGame()

        axios({
            url: API_BASE_URL+"/game/"+game,
            method: 'GET',
        })
            .then(response => {
                this.setState({games: response.data, studios: response.data.studio});
            })
            .catch(err => {
                console.error(err);
            });

    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = () => {
        //e.preventDefault()
        const game = this.getGame()
        //const game = this.getGame();
        axios.put(API_BASE_URL + `/game/editer/`+ game, this.state)
            .then( () => {
                return <Redirect to={`/`}/>
            })
            .catch(error => {
                console.log(error)
            })

    }
    removeHandler = () => {
        //e.preventDefault()
        const game = this.getGame()
        console.log(game)
        console.log(this.state)
        //const game = this.getGame();
        axios.delete(API_BASE_URL + `/game/supprimer/`+ game)
            .then( () => {
                return <Redirect to={`/`}/>
            })
            .catch(error => {
                console.log(error)
            })

    }
    render() {
        const {titre,annee,studio,image} = this.state
        const game = this.state.games;
        const studios = this.state.studios;
        const urGame =this.getGame()
        console.log(urGame)
        return(
            <div>
                <form className={"form-block"} onSubmit={this.submitHandler}>
                    <div className={"row"}>
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group fl_icon">
                                <div className={"icon"}><i className={"fa fa-user"}/>Titre</div>
                                <input className={"form-input"} type="text" name="titre" value={titre} placeholder={game.titre}
                                       onChange={this.changeHandler}/>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 fl_icon">
                            <div className="form-group fl_icon">
                                <div className="icon"><i className="fa fa-envelope-o"/>Année</div>
                                <input className={"form-input"} type="text" name="annee" value={annee} placeholder={game.annee}
                                       onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 fl_icon">
                            <div className="form-group fl_icon">
                                <div className="icon"><i className="fa fa-envelope-o"/>Studio</div>
                                <input className={"form-input"} type="text" name="studio" value={studio} placeholder={studios.id}
                                       onChange={this.changeHandler}/>

                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 fl_icon">
                            <div className="form-group fl_icon">
                                <div className="icon"><i className="fa fa-envelope-o"/>Image</div>
                                <input className={"form-input"} type="text" name="image" value={image} placeholder={game.image}
                                       onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div className={"col-md-12 text-center"}>
                            <button className="btn btn-primary pull-center" type="submit">Edit</button>
                        </div>
                    </div>
                </form>
                <div>
                <form className={"form-block"} onSubmit={this.removeHandler}>
                    <div className={"col-md-12 text-center"}>
                        <button className="btn btn-primary pull-center" type="submit">delete</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }

}
export default EditGame