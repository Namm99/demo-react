import React from "react";
import { useState } from "react";


// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         address: 'Thai Binh',
//         age: ''
//     }


//     handleOnChangeInput = (event) => {
//         // console.log(event.target.value)
//         this.setState({
//             name: event.target.value
//         })

//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })

//     }

//     handleOnSubmit = (event) => {
//         //ngăn reload lại trang
//         event.preventDefault();
//         // console.log(this.state)
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + "-random",
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div>
//                 my name is {this.state.name} and I'm from {this.state.address}
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <label>Your name:</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => { this.handleOnChangeInput(event) }}
//                     />
//                     <label>Your age:</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => { this.handleOnChangeAge(event) }}
//                     />
//                     <button>Submit</button>
//                 </form>

//             </div>
//         )

//     }
// }



const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('Thai Binh');
    const [age, setAge] = useState('');

    //handle fuction
    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: name,
            age: age
        });
    }

    return (
        <div>
            my name is {name} and I'm from {address}
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>Your name:</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => { handleOnChangeInput(event) }}
                />
                <label>Your age:</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => { handleOnChangeAge(event) }}
                />
                <button>Submit</button>
            </form>

        </div>
    )

}

export default AddUserInfor;