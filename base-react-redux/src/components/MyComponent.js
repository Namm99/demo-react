// Class Component
// Function Component(Hook) - new
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Nam", age: '18' },
            { id: 2, name: "Thanh", age: '16' },
            { id: 3, name: "Tran", age: '23' },
            { id: 4, name: "NamOld", age: '69' },
        ]
    }


    //add new user
    handleAddNewUser = (userObj) => {
        // console.log(">>>check data from parent", userObj)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]

        })
    }

    //delete user
    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }


    //JSX
    render() {
        //DRY: don't repeat youseft
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}

                />
            </div>
        )
    }
}

export default MyComponent;
