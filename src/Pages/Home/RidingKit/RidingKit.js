import React from "react";

const RidingKit = ({ kit }) => {
  const { id, img, name, price } = kit;
  return (
    <div className="card-container mx-auto">
      <div className="card border-0 rounded-lg shadow-lg p-2" style={{ width: "19rem" }}>
        <img className="rounded" src={img} alt="" />
        <div className="info mt-4">
          <h6 style={{color: 'navy'}}>{name}</h6>
          <p>Price: ${price}</p>
        </div>
        <div className="button btn">{/* <button onClick={() => navigateServiceDetail(id)}>Get Service</button> */}</div>
      </div>
    </div>
  );
};

export default RidingKit;
