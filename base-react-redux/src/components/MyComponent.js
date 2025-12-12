// Class Component
// Function Component(Hook) - new
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import { use } from "react";
import { useState } from "react";


// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Nam", age: '18' },
//             { id: 2, name: "Thanh", age: '16' },
//             { id: 3, name: "Tran", age: '23' },
//             { id: 4, name: "NamOld", age: '69' },
//         ]
//     }


//     //add new user
//     handleAddNewUser = (userObj) => {
//         // console.log(">>>check data from parent", userObj)
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]

//         })
//     }

//     //delete user
//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }


//     //JSX
//     render() {
//         //DRY: don't repeat youseft
//         return (
//             <div>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <br></br>
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}

//                 />
//             </div>
//         )
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 2, name: "Thanh", age: '16' },
        { id: 3, name: "Tran", age: '23' },
        { id: 4, name: "NamOld", age: '69' },
    ])

    //handle function 
    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone)
        // setListUsers(listUsers.filter(item => item.id !== userId));

    }

    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br></br>
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}

            />
        </div>
    )

}



export default MyComponent;
