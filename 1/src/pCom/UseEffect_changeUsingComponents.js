import React, { Component } from 'react'

class UseEffect_changeUsingComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
             data:'',
             count:0
        }
    }
    handleChange = (event) =>{
        this.setState(
        {
            data:event.target.value
        })
    }
    componentDidMount()
    {
        document.title=`clicked ${this.state.count}`
    }
    componentDidUpdate(prevState)
    {
        if(this.state.count!==prevState.count)
        {
            console.log('updated')
            document.title=`clicked ${this.state.count}`
        }
    }
    add = () =>
    {
        this.setState({
            count:this.state.count+1
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type='text' value={this.state.data} onChange={this.handleChange}/>  
                    <p onClick={this.add}>hello</p> 
                </form>    
            </div>
        )
    }
}

export default UseEffect_changeUsingComponents
