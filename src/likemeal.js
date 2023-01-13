import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Meal = () => {
  const [data, setData] = useState();

  const getMealData= () => {
    axios({
      method: "get",
      url: "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        apiKey: process.env.REACT_APP_APIKEY,
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMealData();
  }, []);

  const handleLike = (id, isLike) => {
    if (!isLike) {
      axios({
        method: "post",
        url: "https://api-bootcamp.do.dibimbing.id/api/v1/like",
        data: {
          foodId: id,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          apiKey: process.env.REACT_APP_APIKEY,
        },
      })
        .then((response) => {
          console.log(response);
          getMealData();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios({
        method: "post",
        url: "https://api-bootcamp.do.dibimbing.id/api/v1/unlike",
        data: {
          foodId: id,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          apiKey: process.env.REACT_APP_APIKEY,
        },
      })
        .then((response) => {
          console.log(response);
          getMealData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      {/* <Carousel /> */}
      <section>
        <div className="container-md">

         

          <h1 className="text-dark text-center mt-4 fw-bolder">
            <span className="color1">Food</span>
            <span className="color2 m-1">Journal</span>
          </h1>
          <div className="row row-cols-1 row-cols-md-4 g-4 mt-1 mb-5">
            {data &&
              data.data.map((r) => {
                return (
                  <div className="card-group" key={r.id}>
                    <div className="card h-100 bg1 shadow mt-3">
                      <img
                        src={r.imageUrl}
                        className="card-img-top food-card-image mx-auto mt-3 "
                        alt={r.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">{r.name}</h5>
                        <p className="card-text">{r.description}</p>
                        <i className="fa-brands fa-elementor">
                          {r.ingredients.map((m, index) => {
                            return (
                              <span key={index}>{(index ? ", " : "") + m}</span>
                            );
                          })}
                        </i>
                      </div>
                      <div className="bg3 card-footer">
                        <small className="tc1">
                          <Link to={`/foodrating/${r.id}`}>
                            <i
                              className="fa-solid fa-star m-1"
                              style={{ color: `gold` }}
                            ></i>
                          </Link>
                          {r.rating} Rating
                        </small>
                        <small className="tc1">
                          <i
                            className="fa-solid fa-heart m-1"
                            style={{ color: `${r.isLike ? "red" : ""}` }}
                            onClick={() => handleLike(r.id, r.isLike)}
                          ></i>
                          {r.totalLikes}
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Meal;
