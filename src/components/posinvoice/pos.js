import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import b1 from "../../assets/images/b1.png";
import b2 from "../../assets/images/b2.png";
import b3 from "../../assets/images/b3.png";
import b4 from "../../assets/images/b4.png";
import b5 from "../../assets/images/b5.png";
import b6 from "../../assets/images/b6.png";
import b7 from "../../assets/images/b7.png";
import b8 from "../../assets/images/b8.png";
import b9 from "../../assets/images/b9.png";
import b10 from "../../assets/images/b10.png";

function POSApp() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [orderDetails, setOrderDetails] = useState({
    customerName: "",
    customerType: "Dine In Customer",
    waiter: "",
    table: "",
    cookingTime: "",
  });
  const [selectedItems, setSelectedItems] = useState([]);

  const images = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10];
  const menuItems = [
    { id: 1, image: b1, name: "Bangla Set Menu Rice Boarta", price: 15.99 },
    { id: 2, image: b2, name: "Dinner Rice Package (Regular)", price: 12.99 },
    { id: 3, image: b3, name: "Pasta (Spicy)", price: 10.99 },
    { id: 4, image: b4, name: "Salmon Barbecue", price: 20.99 },
    { id: 5, image: b5, name: "Baked Sea Bream", price: 18.99 },
    { id: 6, image: b6, name: "Ramen", price: 14.99 },
    { id: 7, image: b7, name: "Nasi Goreng", price: 13.99 },
    { id: 8, image: b8, name: "Betel Leaf Shrimp", price: 19.99 },
    { id: 9, image: b9, name: "Chicken Dumpling", price: 9.99 },
    { id: 10, image: b10, name: "Idli Sumbal", price: 11.99 },
  ];

  const handleInputChange = (e) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.id]: e.target.value,
    });
  };

  const handleAddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div className="container-fluid">
      {/* Top Navigation Buttons */}
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-start align-items-center gap-3">
          <button className="btn btn-success">New Order</button>
          <button className="btn btn-primary">On Going Order</button>
          <button className="btn btn-info">Kitchen Status</button>
          <button className="btn btn-warning">Online Order</button>
          <button className="btn btn-danger">Today Order</button>
        </div>
        <div className="col-12 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Product..."
            style={{ width: "50%" }}
          />
        </div>
      </div>

   
      <div className="row">
   
        <div className="col-md-2">
          <div className="list-group">
            {[
              "All",
              "Japanese",
              "Indian Vegetarian",
              "Lunch Package",
              "Dinner Package",
              "Bengali Food",
              "Italian",
              "Indian Cuisine",
              "Mexican",
              "Arabian",
              "Chinese",
              "Sea Food",
              "Korean",
              "Asian",
              "Thai",
            ].map((category) => (
              <button
                key={category}
                className={`list-group-item list-group-item-action ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

      
        <div className="col-md-7">
          <div className="row">
            {menuItems.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div
                  className="card"
                  onClick={() => handleAddItem(item)}
                  style={{
                    height: "200px",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{
                      height: "120px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <div className="card-body p-2">
                    <h6 className="card-title text-center">{item.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    
        <div className="col-md-3">
          <form>
            <div className="mb-3">
              <label htmlFor="customerName" className="form-label">
                Customer Name
              </label>
              <input
                type="text"
                className="form-control"
                id="customerName"
                value={orderDetails.customerName}
                onChange={handleInputChange}
                placeholder="Walkin"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="customerType" className="form-label">
                Customer Type
              </label>
              <select
                className="form-select"
                id="customerType"
                value={orderDetails.customerType}
                onChange={handleInputChange}
              >
                <option>Dine In Customer</option>
                <option>Takeaway</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="waiter" className="form-label">
                Waiter
              </label>
              <select
                className="form-select"
                id="waiter"
                value={orderDetails.waiter}
                onChange={handleInputChange}
              >
                <option>Select Option</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="table" className="form-label">
                Table
              </label>
              <select
                className="form-select"
                id="table"
                value={orderDetails.table}
                onChange={handleInputChange}
              >
                <option>Select Option</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="cookingTime" className="form-label">
                Cooking Time
              </label>
              <input
                type="text"
                className="form-control"
                id="cookingTime"
                value={orderDetails.cookingTime}
                onChange={handleInputChange}
                placeholder="00:00:00"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default POSApp;
