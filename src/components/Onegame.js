import React,{Component} from 'react'


class Onegame extends Component{
    constructor(props) {
        super(props)
    
       this.input=React.createRef()
       this.state={
           list:[],
          }
    }
    
    addComment=()=>{
      const postItem = this.props.location.state;
    const Items={
            id: postItem.id,
            value:this.input.current.value,
            Date: new Date().toUTCString()
        };
    
        if(localStorage.getItem('list')==null){
            const list=[]
            list.push(Items);
            localStorage.setItem("list",JSON.stringify(list))
        }
        else{
            const list=JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list",JSON.stringify(list))
        }
        this.setState({
            list:JSON.parse(localStorage.getItem('list'))
        });
    }
    
    componentDidMount() {
        const list = window.localStorage.getItem('list');
        const parsedList = JSON.parse(list);
        if(list == null){
            return false
        }
        else{
            this.setState({
                list: parsedList,
            })
            console.log(this.state.list);
        }
    }
    
    deleteItem=(event)=> {
        
        let index = event.target.getAttribute('data-key')
        let listValue=JSON.parse(localStorage.getItem('list'));
        listValue.splice(index,1)
        this.setState({list:listValue});
        localStorage.setItem('list',JSON.stringify(listValue))
    }
    
    
    
    render()
    {
        const postItem = this.props.location.state;
        return (
          <>
             <div className="container">
                <div className="flex-column align-items-start bd-highlight">

                    <div className="d-flex justify-content-center pt-5">
                        <h2>{postItem.titre}</h2>
                    </div>
                    <div className="d-flex pt-5">
                     <div className="d-flex flex-column">
                     <img src={postItem.image} className={"card-img-top"} style={{width: "300px"}} alt="..."></img>
                     <p><span className="font-weight-bold">Categorie : </span>{postItem.categorie}</p>
                     <p><span className="font-weight-bold">Année de sortie : </span>{postItem.annee}</p>
                     <p><span className="font-weight-bold">studio : </span>{postItem.studio}</p>
                     </div>



                    </div>
                    <div className="d-flex flex-column ml-5">
                        <div className=" text-break mb-5">
                            <p className="font-weight-bold">Content :</p>
                                {postItem.content}
                        </div>
                    </div>

                </div>
             </div>

             <div className="main-container">
                <h1>Commentaire</h1>
                <hr/>
                <div className="container">
                    
                       
                        <div className="d-flex justify-content-center">
                            
                                
                                <input type="text" placeholder="AddComment..." ref={this.input}></input>
                                <button onClick={this.addComment} className="button" >Add</button>
                            
                        </div>
                    
                   
                        <div>
                                {
                                    this.state.list.map( function (item,index)
                                    {
                                      if (postItem.id === item.id) {
                                          return(
                                            <div className="card-body" key={index}>
                                                {item.value}<br/>
                                                <span className="btn btn-theme">{item.Date}</span>
                                            </div>
                                            
                                                
                                            
                                        )
                                      }
                                      
                                    })
                                } 
                            </div>
                </div>
                
            </div>
          </>
        )
    }
}
     
        
     
export default Onegame