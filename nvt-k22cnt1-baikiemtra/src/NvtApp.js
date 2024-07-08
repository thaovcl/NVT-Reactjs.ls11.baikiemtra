import React, { useEffect, useState } from 'react';
import NvtSinhVienList from './components/NvtSinhVienList';
import axios from './api/NvtApi';
import NvtSinhVienAddOrEdit from './components/NvtFormAddOrEdit'


export default function NvtApp() {
  const [nvtListSinhvien, setNvtListSinhvien] = useState([]);
  const [nvtAddOrEdit, setNvtAddOrEdit] = useState(false);
  const [nvtSelectedUser, setNvtSelectedUser] = useState(null);

  const nvtGetAllUser = async () => {
    try {
      const response = await axios.get("/nvtSinhVien");
      setNvtListSinhvien(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    nvtGetAllUser();
  }, []);

  const nvtHandleAddNew = () => {
    setNvtSelectedUser(null);
    setNvtAddOrEdit(true);
  };

  const nvtHandleClose = () => {
    setNvtAddOrEdit(false);
  };

  const nvtHandleSubmit = async (formData) => {
    try {
      if (formData.id) {
        await axios.put(`/${formData.id}`, formData);
      } else {
        await axios.post("/", formData);
      }
      nvtGetAllUser();
      setNvtAddOrEdit(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const nvtHandleEdit = (userId) => {
    const selectedUser = nvtListSinhvien.find(user => user.id === userId);
    if (selectedUser) {
      setNvtSelectedUser(selectedUser);
      setNvtAddOrEdit(true);
    }
  };

  const nvtHandleDelete = async (userId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) {
      try {
        await axios.delete(`/${userId}`);
        nvtGetAllUser();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className="container border my-3">
      <h1>Làm việc với API</h1>
      <hr />
      <button className="btn btn-primary mb-3" onClick={nvtHandleAddNew}>Thêm mới</button>
      {nvtAddOrEdit && (
        <NvtSinhVienAddOrEdit
          initialValues={nvtSelectedUser}
          onNvtClose={nvtHandleClose}
          onNvtSubmitForm={nvtHandleSubmit}
        />
      )}
      <NvtSinhVienList
        renderNvtListUsers={nvtListSinhvien}
        handleEdit={nvtHandleEdit}
        handleDelete={nvtHandleDelete}
      />
    </div>
  );
}
