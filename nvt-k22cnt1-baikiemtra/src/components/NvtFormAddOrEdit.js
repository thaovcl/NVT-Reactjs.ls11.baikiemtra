import React, { useEffect, useState } from 'react';
import axios from '../api/NvtApi';

export default function NvtSinhVienAddOrEdit({ initialValues, onNvtClose, onNvtSubmitForm }) {
  const [formData, setFormData] = useState({
    NvtMaSV: '',
    NvtHoSV: '',
    NvtTenSV: '',
    NvtPhai: '',
    NvtNS: '',
    NvtNoiSinh: '',
    NvtMaKH: '',
    NvtHocBong: '',
    NvtDTB: ''
  });

  useEffect(() => {
    if (initialValues) {
      setFormData({
        ...initialValues
      });
    }
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNvtClose = () => {
    onNvtClose(false);
  };

  const handleNvtSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formData.id) {
        // Update existing user
        await axios.put(`/${formData.id}`, formData);
      } else {
        // Add new user
        await axios.post("/", formData);
      }

      onNvtSubmitForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleNvtSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text">Mã sinh viên</span>
          <input
            type="text"
            className="form-control"
            name="NvtMaSV"
            value={formData.NvtMaSV}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Họ</span>
          <input
            type="text"
            className="form-control"
            name="NvtHoSV"
            value={formData.NvtHoSV}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Tên</span>
          <input
            type="text"
            className="form-control"
            name="NvtTenSV"
            value={formData.NvtTenSV}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Phái</span>
          <input
            type="text"
            className="form-control"
            name="NvtPhai"
            value={formData.NvtPhai}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Ngày sinh</span>
          <input
            type="text"
            className="form-control"
            name="NvtNS"
            value={formData.NvtNS}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Nơi sinh</span>
          <input
            type="text"
            className="form-control"
            name="NvtNoiSinh"
            value={formData.NvtNoiSinh}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Mã khóa học</span>
          <input
            type="text"
            className="form-control"
            name="NvtMaKH"
            value={formData.NvtMaKH}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Học bổng</span>
          <input
            type="text"
            className="form-control"
            name="NvtHocBong"
            value={formData.NvtHocBong}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Điểm trung bình</span>
          <input
            type="text"
            className="form-control"
            name="NvtDTB"
            value={formData.NvtDTB}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Ghi lại</button>
        <button type="button" className="btn btn-danger" onClick={handleNvtClose}>Đóng</button>
      </form>
    </div>
  );
}
