import React from 'react';

export default function NvtSinhVienList({ renderNvtListUsers, handleEdit, handleDelete }) {

  const handleDeleteSV = (id) => {
    handleDelete(id);
  };

  const handleEditSV = (id) => {
    handleEdit(id);
  };

  let nvtElementUser = renderNvtListUsers.map((nvtUser) => (
    <tr key={nvtUser.id}>
      <td>{nvtUser.id}</td>
      <td>{nvtUser.NvtMaSV}</td>
      <td>{nvtUser.NvtHoSV}</td>
      <td>{nvtUser.NvtTenSV}</td>
      <td>{nvtUser.NvtPhai}</td>
      <td>{nvtUser.NvtNS}</td>
      <td>{nvtUser.NvtNoiSinh}</td>
      <td>{nvtUser.NvtMaKH}</td>
      <td>{nvtUser.NvtHocBong}</td>
      <td>{nvtUser.NvtDTB}</td>
      <td>
        <button type='button' className='btn btn-danger mx-3' onClick={() => handleDeleteSV(nvtUser.id)}>Xóa</button>
        <button type='button' className='btn btn-warning' onClick={() => handleEditSV(nvtUser.id)}>Sửa</button>
      </td>
    </tr>
  ));

  return (
    <div className='row'>
      <div className='col-md-12'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Mã SV</th>
              <th>Họ</th>
              <th>Tên</th>
              <th>Phái</th>
              <th>Ngày sinh</th>
              <th>Nơi sinh</th>
              <th>Mã khóa học</th>
              <th>Học bổng</th>
              <th>ĐTB</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {nvtElementUser}
          </tbody>
        </table>
      </div>
    </div>
  );
}
