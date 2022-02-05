import React, { Component } from 'react'

class ComponentWillUn extends Component {
    componentWillUnmount()
    {
        alert("bye")
    }
    render() {
        return (
            <div>
                <h1>Hello Hi I am Krishna Sai Nandan</h1>                
            </div>
        )
    }
}

export default ComponentWillUn
