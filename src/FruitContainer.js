import React, { Component } from 'react'
import List from './List'
import Input from './Input'

class FruitContainer extends Component {

    // new way to do this instead of using constructor and super()
    state= {
        //initialize the fruit list to the full list passed in props
        fruitsToDisplay: this.props.fruits,
        unfilterFruitList: []
        //initialize the filter value
        //filterValue: ''
    }

    //change the value of the filterValue state 
    handleFilterChange = (e) => {
        //console.log("handleFilterChange")
        // remove fruits that don't contain the filter value
        const filterFruitList = this.props.fruits.filter((f)=>{
            return f.toLowerCase().includes(e.target.value.toLowerCase())
        })
        const unfilterFruitList = this.props.fruits.filter((f)=> {
             return !f.toLowerCase().includes(e.target.value.toLowerCase())
        })
        
        //chnage the value of the filterValue state
        this.setState({
            
            fruitsToDisplay: filterFruitList, 
            unfilterFruitList: unfilterFruitList
            //filterValue: e.target.value

        })
    }

    render(){
        //console.log(this.props.fruits)
        return(
            <>
                <h1>Hello From Fruit Container</h1>
                <Input onChange={this.handleFilterChange}/>
                <p>matching fruit:</p>
                <List fruits={this.state.fruitsToDisplay}/>
                <p>unmatched fruits:</p>
                <List fruits={this.state.unfilterFruitList}/>
            </>
        )
    }
}
export default FruitContainer