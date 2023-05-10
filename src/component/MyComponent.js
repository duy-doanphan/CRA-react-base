import React, {Component} from 'react';

class MyComponent extends Component {
   state = {
       name: 'Duy',
       age : 21,
       address: 'DN'
   }

    render() {
        return (
            <div>
                My name is {this.state.name} and age : {this.state.age}
            </div>
        );
    }
}

export default MyComponent;