import React, {Component} from 'react';
import Datagames from '../data/Datagmes.json';
import Games from './Games';

class Allgames extends Component {

    constructor (props) {
        super(props)
        this.state = {
            postList: []
        }
    }
    sortByTitleA () {
        const {postList} = this.state
        let newPostList = postList
    
         newPostList = postList.sort((a, b) =>{  if (b.titre < a.titre ) {
            return -1;
          }
          if (b.titre  > a.titre ) {
            return 1;
          }
          return 0;
        })
    
        this.setState({
      
      postList: newPostList
        })
    }
     
    sortByTitleD () {
        const {postList} = this.state
        let newPostList = postList
    
         newPostList = postList.sort((a, b) =>{  if (a.titre < b.titre ) {
            return -1;
          }
          if (a.titre  > b.titre ) {
            return 1;
          }
          return 0;
        })
    
        this.setState({
      
      postList: newPostList
        })
    }
   

    sortByDateD () {
        const {postList} = this.state
        let newPostList = postList
    
         newPostList = postList.sort((a, b) => b.annee - a.annee)
    
        this.setState({
      
      postList: newPostList
        })
    }
    sortByDateA () {
        const {postList} = this.state
        let newPostList = postList
    
         newPostList = postList.sort((a, b) => a.annee - b.annee)
    
        this.setState({
      
      postList: newPostList
        })
    }

    componentDidMount () {
        this.setState({
            postList: Datagames
        })
    }
   
    render(){
        const {postList} = this.state
        const toggleSortTitleA = (event) => {
            this.sortByTitleA()
          }
          const toggleSortTitleD = (event) => {
            this.sortByTitleD()
          }
            const toggleSortDateA = (event) => {
            this.sortByDateA()
          }
          const toggleSortDateD = (event) => {
            this.sortByDateD()
          }
        
         
        return (
           <div>
               <h1>Online Games</h1>
               <button type={"button"} className={"btn btn-secondary"} onClick={toggleSortDateD}>Trier par date de sortie decroissant</button>
               <button type={"button"} className={"btn btn-success"} onClick={toggleSortDateA}>Trier par date de sortie croissant</button>
               <button type={"button"} className={"btn btn-danger"} onClick={toggleSortTitleD}>Trier par ordre alphabetique croissant</button>
               <button type={"button"} className={"btn btn-warning"} onClick={toggleSortTitleA}>Trier par ordre alphabetique decroissant</button>
               <div className={"album py-5 bg-light"}>
        <div className={"container"}>
        <div className={"row"}>
               {postList.map((game, index) => {
         return <Games 
         post={game}
         key={`post-list-key ${index}`}
         /> 
                 })}
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Allgames;