import React, { useState } from "react";

export default function Tour({ id, name, info, price, image, deleteTour }) {
  const [readmore, setreadmore] = useState(false);

  return (
    <>
      <div className="card mt-5">
        <img src={image} className="card-img-top" alt="tour" />
        <div className="card-body">
          <div className=" d-flex justify-content-between p-2">
            <h5 className="card-title">{name}</h5>
            <p className="bg-info p-1 rounded">{`${price}$`}</p>
          </div>
          <p className="card-text">
            {readmore ? info : info.substring(0, 200)}
            <span
              className="text-info mx-2"
              onClick={() => {
                setreadmore(!readmore);
              }}
            >
              {readmore ? "show less" : "Read More ....."}
            </span>
          </p>
          <button
            className="btn btn-outline-danger m-auto d-block"
            onClick={() => deleteTour(id)}
          >
            {" "}
            Not intersted
          </button>
        </div>
      </div>
    </>
  );
}
