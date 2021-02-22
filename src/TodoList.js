import React , { Component} from "react";
import ListItems from './ListItems';
import Header from './Header'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
        this.addItem=this.addItem.bind(this);
       this.handleDelete= this.handleDelete.bind(this);
    }
    addItem(e){
        if(this._input.value !== ""){
            
            var newItem= {
                text: this._input.value,
                key: Date.now()
            }
            this.setState({
                items: [...this.state.items, newItem]
            })

            {/*this.setState(
                (previous) => {
                    return {
                        items: previous.items.concat(newItem)
                    }
                }
            )*/}
            
            //console.log(this.state.items)
        }
        e.preventDefault();
        this._input.focus();
        this._input.value="";
    }
    handleDelete(key){
        var filterItem = this.state.items.filter(item => {
            
                return (item.key !== key)
                    
                
        })
       
        this.setState(
              
            {items:[...filterItem]}
        )
    }
    
    render(){
        return(
            <div>
                <Header />
                <form onSubmit={this.addItem}>
                    <input ref={(el)=> this._input=el} placeholder='Enter task here: '></input>
                    <button type='submit'>Go!</button>
                </form>
                <ListItems items={this.state.items}     handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default TodoList