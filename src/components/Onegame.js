import React,{Component} from 'react'
import axios from "axios";
import {API_BASE_URL} from "../config";
import CommentForm from "./CommentForm";
import ListComment from "./ListComment";
import Comments from "./Comments";


class Onegame extends Component{
    constructor(props) {
        super(props)
    
       this.input=React.createRef()
       this.state={
           games:[],
           studio:{}
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
                this.setState({games: response.data, studio: response.data.studio});
            })
            .catch(err => {
                console.error(err);
            });

    }
    render()
    {
        const game = this.state.games;
        const studio = this.state.studio;
        const urGame =this.getGame()
        console.log(urGame)


        return (
          <>
             <div className="container">
                <div className="flex-column align-items-start bd-highlight">

                    <div className="d-flex justify-content-center pt-5">
                        <h2>{game.titre}</h2>
                    </div>
                    <div className="d-flex pt-5">
                     <div className="d-flex flex-column">
                     <img src={game.image} className={"card-img-top"} style={{width: "300px"}} alt="..."></img>
                     <p><span className="font-weight-bold">Studio : </span>{studio.NomStudio}</p>
                     <p><span className="font-weight-bold">Année de sortie : </span>{game.annee}</p>

                     </div>



                    </div>
                    <div className="d-flex flex-column ml-5">
                        <div className=" text-break mb-5">
                            <p className="font-weight-bold">Content :</p>
                               <p>Assassin's Creed est une série de jeux vidéo historique d'action-aventure et d'infiltration en monde ouvert, développée et éditée par Ubisoft. Les titres principaux développés par Ubisoft Montréal sont sortis sur les consoles de 7ᵉ, 8ᵉ génération et prochainement sur la 9ᵉ génération ainsi que sur PC, tandis que les épisodes secondaires sont sortis sur consoles portables et sur téléphones portables.</p>
                        </div>
                    </div>

                </div>
             </div>
              <ListComment children={urGame}/>

              <CommentForm children={game.id}/>
          </>
        )
    }
}
     
        
     
export default Onegame