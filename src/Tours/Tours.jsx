import React from "react";
import Tour from "../Tour/Tour";

export default function Tours({ tours, deleteTour }) {
  return (
    <>
      <h1 className=" text-center text-danger mt-5"> All Tours</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto ">
            {tours.map((tour) => (
              <Tour {...tour} deleteTour={deleteTour} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
