import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import Tours from "./Tours/Tours";

function App() {
  const [tours, settours] = useState(null);
  const url = "https://course-api.com/react-tours-project";
  async function getApi() {
    let { data } = await axios.get(url);
    settours(data);
  }
  function deleteTour(id) {
    let newTour = tours.filter((tour) => tour.id !== id);
    settours(newTour);
  }
  useEffect(() => {
    getApi();
  }, []);

  console.log(tours.length);
  return (
    <>
      {tours ? (
        tours.length === 0 ? (
          <div className="d-flex justify-content-center mt-5">
            <div>
              <h2>no tours left</h2>
              <button className="btn btn-info ms-5" onClick={() => getApi()}>
                refresh
              </button>
            </div>
          </div>
        ) : (
          <Tours tours={tours} deleteTour={deleteTour} />
        )
      ) : (
        <div className=" vh-100 w-100 bg-light d-flex justify-content-center ">
          <div>
            <h2 className="text-center text-dark  my-5">Loading..........</h2>
            <i class="fa-solid fa-spinner fa-2x fa-spin ms-5"></i>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
