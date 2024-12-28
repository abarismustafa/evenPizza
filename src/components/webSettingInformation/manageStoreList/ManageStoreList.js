// ManageStore.js
import React, { useState } from "react";
import ManageStoreForm from "./ManageStoreForm";
import ManageStoreTable from "./ManageStoreTable";

const ManageStoreList = () => {
  const [storeData, setStoreData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = (formData) => {
    if (editIndex !== null) {
      
      const updatedStoreData = [...storeData];
      updatedStoreData[editIndex] = formData;
      setStoreData(updatedStoreData);
      setEditIndex(null); 
    } else {
      
      setStoreData([...storeData, formData]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setStoreData(storeData.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
        <h2 className="fs-4">Manage Store Time</h2>
      </div>
      <ManageStoreForm
        onSubmit={handleAddOrUpdate}
        editData={editIndex !== null ? storeData[editIndex] : null}
        isEditing={editIndex !== null}
        cancelEdit={() => setEditIndex(null)}
      />
      <ManageStoreTable
        data={storeData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ManageStoreList;
