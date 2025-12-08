// Class Component
// Function Component(Hook) - new
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Nam", age: 21 },
            { id: 2, name: "Thanh", age: 22 },
            { id: 3, name: "Tran", age: 23 },
        ]
    }


    //JSX
    render() {
        //DRY: don't repeat youseft
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        )
    }
}

export default MyComponent;
