import axios from '../utils/axiosCustomize';

// POST user
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

//GET all user
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

//DELETE user
const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } })
}

//Page user
const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}


export { postCreateNewUser, getAllUsers, putUpdateUser, deleteUser, getUserWithPaginate }