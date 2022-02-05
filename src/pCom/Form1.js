import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            usn:'',
            marks:'' 
        }
    }
    Changename = (event) =>
    {
        this.setState(
            {
                name:event.target.value
            }
        )
    }
    ClickOn =() =>
    {
        alert(this.state.name)
    }
    render() {
        return (
            <div>
                <form action="">
                    
                    <input type="text" value={this.state.name} onChange={this.Changename}/>
                    <input type="text" value={this.state.usn} onChange={this.Changename }/>
                    <input type="text" value={this.state.marks} onChange={this.Changename}/>
                    <button onClick={this.ClickOn}>Click me</button>
                </form>
            </div>
        )
    }
}

export default Form1
