import React,{Component} from 'react'
//import connect
import { connect } from 'react-redux'

//import bindActionCreators 
import { bindActionCreators } from 'redux'
class HomeScreen extends Component{

  constructor(props){
		super(props)
		this.state={
			title:'',
      pages:'',
		}
  }
  
  renderBookList = ()=>{
    console.log(this.props.books.length)
    if(this.props.books.length !== 0){

     return  this.props.books.map(book=>{
        return (
        <div>
          <h3>{book.title}</h3>
          <h5>pages:{book.pages}</h5>
          <button onClick={()=>this.props.removeBook(book.title)}>X</button>
        </div>
        )
      })
    }else{
      return <div>Added book will show here</div>
    }
  }
  render(){
    return(
      <div>
        <input 
          onChange={(e)=> this.setState({title:e.target.value})}
          value={this.state.title}
          className="" 
          placeholder="Enter Title">
        </input>
        <input 
          onChange={(e)=> this.setState({pages:e.target.value})}
          value={this.state.pages}
          className="" 
          placeholder="Enter Pages">
        </input>
        <button onClick={()=>this.props.addBook(this.state)}>Add</button>
        <div>
          {this.renderBookList()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    books:state.books
  }
}

function mapDispatchToProps(dispatch){
  //bind Actions with the store
  return bindActionCreators({
    addBook : (data)=>{
      return {type:"ADD_BOOK",payload:data}
    },
    removeBook: (title)=>{
      return {type:"REMOVE_BOOK",payload:title}
    }
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)