import React, { useState, useEffect } from "react";
import video from "../images/djlight.mp4";
import img from "../images/giu-vicente-FMArg2k3qOU-unsplash.jpg";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);
  return (
    <>
      {show ? (
        <>
          <video autoPlay loop muted className="video_selector">
            <source src={video} type="video/mp4" />
          </video>

          <div className="home-page">
            <div className="home-div">
              <h2 className="lightmix">
                <span>😍😍</span>
                <span>H</span>
                <span>a</span>
                <span>p</span>
                <span>p</span>
                <span>y</span>
                <span>D</span>
                <span>u</span>
                <span>s</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
                <span>a</span>
                <span>😍😍</span>
              </h2>
              <h1>{userName}</h1>
              <h2>
                {show ? (
                  <div>
                    <h2>
                      <marquee behavior="" scrollamount="20" direction="">
                        Happy, to see you back
                      </marquee>
                    </h2>
                  </div>
                ) : (
                  "We Are The MERN Developer"
                )}
              </h2>
            </div>
          </div>
        </>
      ) : (
        <div className="home_img">
          <img src={img} alt="image" />
          <h2
            style={{
              color: "white ",
              textAlign: "center",
              marginTop: "17%",
              fontWeight: "600px",
              fontSize: "8rem",
            }}
          >
            WELCOME TO JMZ
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,96L80,122.7C160,149,320,203,480,213.3C640,224,800,192,960,154.7C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default Home;
