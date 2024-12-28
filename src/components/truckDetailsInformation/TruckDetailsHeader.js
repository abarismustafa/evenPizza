import React from "react";

const TruckDetailsHeader = ({handleClick, HeaderIcon}) => {

  return (
    <div className="row align-itmes-center">
      <div  className="col-lg-6 col-sm-12">
        <ul className="d-flex p-0 m-0 listunstyled">
          {HeaderIcon.map((item) => (
            <li className="me-2">
              <button
                onClick={() =>handleClick(item.name)}
                key={item.id}
                type="button"
                className={ `d-flex align-items-center gap-2 btn m-0 ${item.color ? `btn-${item.color}`:" btn-primary"}`}
              >
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="">
          <input
            type="text"
            className="form-control"
            placeholder={"Fast Search (f1)"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </div>
  );
};

export default TruckDetailsHeader;
