import React, {Component} from 'react';

class MyComponent extends Component {
   state = {
       name: 'Duy',
       age : 21,
       address: 'DN'
   }
    handleClick = (e) => {
        alert('ok')
        console.log(e.target)
    }
    handleHover = () => {
        console.log('hover me')
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