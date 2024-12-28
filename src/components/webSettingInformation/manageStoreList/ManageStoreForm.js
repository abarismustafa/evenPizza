// ManageStoreForm.js
import React, { useState, useEffect } from "react";

const ManageStoreForm = ({ onSubmit, editData, isEditing, cancelEdit }) => {
  const [formData, setFormData] = useState({
    dayName: "",
    openingTime: "",
    closeTime: "",
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.dayName && formData.openingTime && formData.closeTime) {
      onSubmit(formData);
      handleReset();
    } else {
      alert("All fields are required");
    }
  };

  const handleReset = () => {
    setFormData({
      dayName: "",
      openingTime: "",
      closeTime: "",
    });
    if (isEditing) cancelEdit();
  };

  return (
    <div className="card m-2 p-3">
      <div className="row g-3">
        <div className="col-lg-4 col-sm-12">
          <label htmlFor="dayName" className="form-label">
            Day Name
          </label>
          <select
            id="dayName"
            className="form-select"
            value={formData.dayName}
            name="dayName"
            onChange={handleInputField}
          >
            <option value="" disabled>
              Select Day Name
            </option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
          </select>
        </div>

        <div className="col-lg-4 col-sm-12">
          <label htmlFor="openingTime" className="form-label">
            Opening Time
          </label>
          <input
            type="time"
            className="form-control"
            value={formData.openingTime}
            name="openingTime"
            onChange={handleInputField}
          />
        </div>

        <div className="col-lg-4 col-sm-12">
          <label htmlFor="closeTime" className="form-label">
            Close Time
          </label>
          <input
            type="time"
            className="form-control"
            value={formData.closeTime}
            name="closeTime"
            onChange={handleInputField}
          />
        </div>

        <div className="mt-3 text-center">
          <button type="button" className="btn btn-primary px-5" onClick={handleSubmit}>
            {isEditing ? "Update" : "Add"}
          </button>
          <button type="button" className="btn btn-danger px-5" onClick={handleReset}>
            {isEditing ? "Cancel" : "Reset"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageStoreForm;
