import React from 'react';

function ProductionSetting() {
  return (
    <div>
      <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className="table-responsive active-projects style-1">
          <h3 className="tbl-caption text-light">Production Setting</h3>
        </div>
        <div
          style={{
            backgroundColor: "#fffacd",
            color: "black",
            padding: "15px",
            border: "1px solid #f1c40f",
            borderRadius: "5px",
            fontFamily: "Arial, sans-serif",
            margin: "10px",
          }}
        >
          <strong>NOTE***:</strong> A restaurant should have a fixed recipe for a particular food.
          For making your work easy, this application has an auto production system which describes
          like this:
          <br />
          <br />
          Suppose, set a recipe for fried rice and a BBQ chicken in your system once in the module{' '}
          <strong>Recipe Management &gt; Add production</strong> with the ingredients, serving unit,
          variant, and price. Now you have got an order of 3 fried rice and 2 BBQ chicken. You do
          not need to make this production again and again. Just select the food and make the order
          done from <strong>POS</strong>. The system will make the dish ready and it will
          automatically update the in-stock and out-stock quantity in the{' '}
          <strong>REPORT (Production-wise)</strong>, and the ingredients will be reduced from the{' '}
          <strong>REPORT (Kitchen-wise)</strong>.
        </div>
      </div>
    </div>
  );
}

export default ProductionSetting;
