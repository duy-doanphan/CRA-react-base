import React, {Component} from 'react';

class MyComponent extends Component {
    state = {
        name: 'Duy',
        age: 21,
        address: 'DN'
    }
    handleClick = (e) => {
        console.log('my name is', this.state.name)
        this.setState({
            name: 'D',
            age: Math.floor(Math.random() * 100)
        })

    }
    handleChangeInput = (e) => {
        this.setState({name: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }


    render() {


        return (
            <div>
                My name is {this.state.name} and age : {this.state.age}
                <button
                    onClick={this.handleClick}
                >Click me
                </button>
                <hr/>
                <form onSubmit={(e) => {
                    this.handleSubmit(e)
                }}>
                    <input
                        type={"text"}
                        onChange={(e) => {
                            this.handleChangeInput(e)
                        }}
                    />
                    <button>submit</button>
                </form>

            </div>
        );
    }
}

export default MyComponent;