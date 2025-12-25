import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';



const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({})
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [dataView, setDataView] = useState({});


    //TableUsers
    const [listUsers, setListUsers] = useState([])
    //componentDidMount
    useEffect(() => {
        fetchListUsers(); //Lấy danh sách user
    }, [])
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        console.log(res)
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    // click btn update
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        // console.log("Check user update: ", user)
        setDataUpdate(user)
    }

    const resetUpdateData = () => {
        setDataUpdate({})
    }

    //click btn view
    const handleClickBtnView = (user) => {
        setDataView(user)
        setShowModalViewUser(true)
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>
            <div className="users-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary'
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        <FcPlus />Add new user</button>
                </div>
                <div className='table-users-container'>
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                />
            </div>
        </div>
    )
}

export default ManageUser;