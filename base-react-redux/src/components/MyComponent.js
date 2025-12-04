// Class Component
// Function Component(Hook) - new
import React from "react";


class MyComponent extends React.Component {
    state = {
        name: "Nam",
        address: "Thai Binh",
        age: 21
    }

    //JSX
    render() {
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}
            </div>
        )
    }
}

export default MyComponent;
