import React,{Component} from 'react';
import axios from 'axios';
import {API_BASE_URL} from "../config";
import {Redirect} from "react-router-dom";
export class CommentForm extends Component{
constructor(props) {
    super(props);

    this.state = {

        nom: '',
       message:'',


    }


}
    changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = () => {
        console.log(this.state)
        //const game = this.getGame();
        axios.post(API_BASE_URL + '/game/ajoutC/' + this.props.children, this.state)
            .then( () => {
                return <Redirect to={`/game/${this.props.children}`}/>
            })
            .catch(error => {
                console.log(error)
            })

    }

    render(){
    const {nomm, messagee} = this.state

        return(
            <div>
                <form className={"form-block"} onSubmit={this.submitHandler}>
                    <div className={"row"}>
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group fl_icon">
                                <div className={"icon"}><i className={"fa fa-user"}/></div>
                        <input className={"form-input"} type="text" name="nom" value={nomm} placeholder="Your name"
    onChange={this.changeHandler}/>
                            </div>
                        </div>

                    <div className="col-xs-12 col-sm-6 fl_icon">
                        <div className="form-group fl_icon">
                            <div className="icon"><i className="fa fa-envelope-o"/></div>
                        <input className={"form-input"} type="text" name="message" value={messagee} placeholder={"message"}
    onChange={this.changeHandler}/>
                        </div>
                    </div>
                        <div className={"col-md-12 text-center"}>
                    <button className="btn btn-primary pull-center" type="submit">Comment</button>
                        </div>
                    </div>
                </form>


            </div>


        )



    }

}
export default CommentForm;