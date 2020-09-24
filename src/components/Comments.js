import React,{Component} from 'react'
import  "./style.css"



class Comments extends Component{
    constructor(props){
        super(props)
        this.state = {
            postItem: null,
            com:{},
            Urgame :this.props.children
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

    geturg(){
        return this.props.URG
    }

    render(){
        const {postItem} = this.state
        const loc  = this.geturg();
        return(


            <>
                {postItem !== null

                    ?

                    <div className={"container"}>
                        <div className={"be-comment-content"}>
                            {postItem.id_game.id  == loc ?
                                <div className={"col-md-12"}>
                                    <p className={"be-comment-name"}> Nom: {postItem.nom} </p>
                                    <p className={"list-group-item"}>Message: {postItem.message} </p>


                                </div>
                                : ''}
                        </div>
                    </div>
                    : ''}
            </>

        )

    }
}
export default Comments;