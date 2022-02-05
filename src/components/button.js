import React, { Component } from 'react'

class button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'krishna',
            roll:23,
            marks:55
        }
    }
    change= () =>
    {
        this.setState(
            {
                name:'sai',
                roll:40,
                marks:100
            }
        )
    }
    Hello=()=>
    {

    }
    name=[
        {
            id:1,
            name:"krishna",
            roll:23,
            fathername:"ram"
        },
        {
            id:2,
            name:"Sai",
            roll:232,
            fathername:"ram"
        },
        {
            id:3,
            name:"Nandan",
            roll:31,
            fathername:"ram"
        }
    ]
    render() {
     
        return (

            <div>
            
                {this.state.name} whose Rollno {this.state.roll} got {this.state.marks}
                <button onClick={this.change}>click</button>
                <div onClick={this.Hello}></div>
                {
                    this.name.map((current) => {
                        return(
                            <>
                                <div>{current.id} and {current.name}</div>
                                
                            </>
                        )
                    })
                }
            </div>
        )
    }
}

export default button
