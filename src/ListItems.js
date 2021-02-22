import React , { Component } from 'react';
import './ListItems.css'
function ListItems (props){
        return(
            <div>
                {props.items.map(text => {
                return(
                <div className='delete'>
                    <li key={text.text}>{text.text}</li>
                    <button onClick={()=>{props.handleDelete(text.key)}}>Delete</button>
                </div>)
            })  }
            </div>
        )
    
}

export default ListItems