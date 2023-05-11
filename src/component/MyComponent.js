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
    // handleHover = () => {
    //     console.log('hover me')
    // }
    handleOnChange = (e) => {
       this.setState({name: e.target.value})
    }
    handleOnSubmit = (e) => {
       e.preventDefault()
    }

    render() {


        return (
            <div>
                My name is {this.state.name} and age : {this.state.age}
                <button
                    onClick={this.handleClick}
                    // onMouseOver={this.handleHover}
                >Click me</button>
                <form onSubmit={(e)=>{this.handleOnSubmit(e)}}>
                    <input
                        type="text"
                        onChange={(e)=>{this.handleOnChange(e)}}
                    />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;