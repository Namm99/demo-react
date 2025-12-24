import axios from '../utils/axiosCustomize';

// POST User
const postCreateNewUser = (email, password, username, role, image) => {
    // calls api submitdata
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('api/v1/participant', data)
}

//GET ALL USERS
const getAllUsers = () => {
    return axios.get('api/v1/participant/all')
}

// PUT update user
const putUpdateUser = (id, username, role, image) => {
    // calls api submitdata
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.put('api/v1/participant', data)
}



export { postCreateNewUser, getAllUsers, putUpdateUser }