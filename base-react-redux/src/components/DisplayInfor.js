import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'

// class DisplayInfor extends React.Component {
//     // constructor(props) {
//     //     console.log(">>>call constructor: 1")

//     //     super(props);
//     //     this.state = {
//     //         isShowHide: true
//     //     }

//     // }

//     // componentDidMount() {
//     //     console.log(">>>call me component did mount")
//     //     setTimeout(() => {
//     //         document.title = "NamSensei"
//     //     }, 3000)
//     // }

//     // componentDidUpdate(prevProps, prevState, snapshot) {
//     //     console.log(">>>call me component did update", this.props, prevProps);
//     //     if (this.props.listUsers !== prevProps) {
//     //         if (this.props.listUsers.length === 6) {
//     //             alert("You got 6 user")
//     //         }
//     //     }
//     // }




//     //function

//     //Hide list user
//     // handleShowHide = () => {
//     //     this.setState({
//     //         isShowHide: !this.state.isShowHide
//     //     })
//     // }






//     //reder
//     render() {
//         console.log(">>> call me render: ")
//         // console.log(this.props)
//         //destructuring array/object
//         const { listUsers } = this.props;//object

//         //props => viết tắt properties
//         // console.log(listUsers)
//         return (
//             <div className="display-infor-container">
//                 {/* <img src={logo} /> */}

//                 {/* <== show hide ==> */}
//                 {/* <div>
//                     <span onClick={() => { this.handleShowHide() }}>
//                         {this.state.isShowHide === true ? "Hide list user" : "Show list user"}
//                     </span>
//                 </div> */}
//                 {/* {this.state.isShowHide &&
//                     <div>
//                         {listUsers.map((user) => {
//                             // console.log(">>> check map user ", user)
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>My name's {user.name}</div>
//                                     <div>My age's {user.age}</div>
//                                     <div>
//                                         <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}

//                     </div>
//                 } */}
//                 {/* =========show hide======== */}




//                 {true &&
//                     <div>
//                         {listUsers.map((user) => {
//                             // console.log(">>> check map user ", user)
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>My name's {user.name}</div>
//                                     <div>My age's {user.age}</div>
//                                     <div>
//                                         <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}

//                     </div>
//                 }
//             </div>
//         )
//     }
// }

//stateless vs stateful
const DisplayInfor = (props) => {
    const { listUsers } = props;//object

    return (
        <div className="display-infor-container">

            {true &&
                <div>
                    {listUsers.map((user) => {
                        // console.log(">>> check map user ", user)
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age}</div>
                                <div>
                                    <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}

                </div>
            }
        </div>
    )
}



export default DisplayInfor;