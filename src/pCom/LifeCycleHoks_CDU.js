import React, { Component } from 'react'

class LifeCycleHoks_CDU extends Component {
    constructor(props) {
        super(props)
        this.state = {
             active:'no',
             who:null
        }
    }
    
    componentDidUpdate(prevState)
    {
        console.log("updated")
        if(this.state.who===null)
        {
            this.setState({
                who:'krishna'
            })
        }
    }
    click= () =>
    {
        this.setState({
            active:'yes'
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.who}</p>
                <button onClick={this.click}>active{this.state.active}</button>
            </div>
        )
    }
}

export default LifeCycleHoks_CDU
