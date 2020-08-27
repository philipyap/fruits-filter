import React, { Component } from 'react'

class List extends Component {
    render(){
        const fruitItems = this.props.fruits.map((f)=>{
            return <li>{f}</li>
        })
        return(
        <ul>{fruitItems}</ul> 
            
        )
    }
}
export default List