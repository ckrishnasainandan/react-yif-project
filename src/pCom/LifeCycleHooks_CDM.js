import React, { Component } from 'react'

class LifeCycleHooks_CDM extends Component {
    constructor(props) {
        super(props)
        this.state = {
             data:"krishna",
             id:10
        }
        console.log("comstructor")
    }
    componentDidMount()
    {
        console.log("componentDidMount")
        this.setState({
            data:"NANDAN",
            id:20
        })
        document.title='clicked ok'
    }
    render() {
        console.log("render")
        return (
            <div>
                {this.state.data}
                {this.state.id}
            </div>
        )
    }
}

export default LifeCycleHooks_CDM
