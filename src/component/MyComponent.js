import React, {Component} from 'react';

class MyComponent extends Component {
   state = {
       name: 'Duy',
       age : 21,
       address: 'DN'
   }
    handleClick = (e) => {
        console.log('my name is', this.state.name)
        this.setState({
            name : 'D',
            age : Math.floor(Math.random()*100)
        })

    }
    handleHover = (e) => {
        // console.log('hover me')
        // console.log(e.target)
    }

    render() {


        return (
            <div>
                My name is {this.state.name} and age : {this.state.age}
                <button
                    onClick={this.handleClick}
                    onMouseOver={this.handleHover}
                >Click me</button>
            </div>
        );
    }
}

export default MyComponent;