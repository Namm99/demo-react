import React from "react";

class DisplayInfor extends React.Component {
    render() {
        console.log(this.props)

        //destructuring array/object
        const { listUsers } = this.props;//object

        //props => viết tắt properties
        console.log(listUsers)
        return (
            <div>
                {listUsers.map((user) => {
                    // console.log(user)
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr />
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default DisplayInfor;