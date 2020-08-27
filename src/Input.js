import React, { Component } from 'react'

class Input extends Component {

    

    render(){
        return(

            <div>
                <label HTMLFor='fruit-filter'>Filter these fruits:</label>
                <input type='text' value={this.props.value} onChange={this.props.onChange} name='fruit-filter'/>
            </div>
        )
    }
}
export default Input