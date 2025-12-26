import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';
import TableUserPaginate from './TableUserPaginate';



const ManageUser = (props) => {
    //Paginate
    const LIMIT_USER = 1;
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    //btn update
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({})
    //btn view
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [dataView, setDataView] = useState({});
    //btn delete
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataDelete, setDataDelete] = useState({});

    //TableUsers
    const [listUsers, setListUsers] = useState([])
    //componentDidMount
    useEffect(() => {
        // fetchListUsers(); //Lấy danh sách user
        fetchListUsersWhitPaginate(1);// lấy trang đầu tiên
    }, [])

    //get tất cả người dùng
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        // console.log(res)
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    //get người dùng theo kiểu phân trang
    const fetchListUsersWhitPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if (res.EC === 0) {
            console.log('res DT: ', res.DT)
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
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

    //click btn delete
    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true)
        setDataDelete(user)
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
                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWhitPaginate={fetchListUsersWhitPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    //fetch lại paginate cho các modal
                    fetchListUsersWhitPaginate={fetchListUsersWhitPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                    fetchListUsersWhitPaginate={fetchListUsersWhitPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWhitPaginate={fetchListUsersWhitPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default ManageUser;