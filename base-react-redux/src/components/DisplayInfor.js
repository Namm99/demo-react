import React from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {
    state = {
        isShowHide: true
    }


    //function

    //Hide list user
    handleShowHide = () => {
        this.setState({
            isShowHide: !this.state.isShowHide
        })
    }






    //reder
    render() {
        // console.log(this.props)
        //destructuring array/object
        const { listUsers } = this.props;//object

        //props => viết tắt properties
        // console.log(listUsers)
        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowHide === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowHide &&
                    <div>
                        {listUsers.map((user) => {
                            // console.log(">>> check map user ", user)
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}

                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;