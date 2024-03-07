import * as React from "react";
import Sideba from "../Sideba/Sideba";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import Footer from "../Footer/Footer";
function Body() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after a simulated delay
    }, 400); // Adjust the delay as needed
  }, []);
  return (
    <>
      <div className="display test">
        <div className="col-lg-3 sideba">
          <Sideba />
        </div>
        {isLoading ? (
          <div className="loading-indicator loading">
            <span>
              <ProgressBar
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </span>
          </div> // Display loading indicator
        ) : (
          <div className="col-lg-9 pading">
            <div className="display">
              <div>
                <div>
                  <a
                    href="https://www.youtube.com/watch?v=tAaUbRt6jqM"
                    target="_blank"
                  >
                    <button style={{ border: "none" }} className="none">
                      <img
                        className="img"
                        src="img/card-1.jpg"
                        alt="Image"
                      ></img>
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <a
                    href="https://www.youtube.com/watch?v=psZ1g9fMfeo"
                    target="_blank"
                  >
                    <button style={{ border: "none" }} className="none">
                      <img
                        className="img position-img1"
                        src="img/card-2.jpg"
                        alt="Image"
                      ></img>
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <a
                    href="https://www.youtube.com/watch?v=RKhsHGfrFmY"
                    target="_blank"
                  >
                    <button style={{ border: "none" }} className="none">
                      <img
                        className="img position-img2"
                        src="img/card-3.jpg"
                        alt="Image"
                      ></img>
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <a
                    href="https://www.youtube.com/watch?v=2ips2mM7Zqw"
                    target="_blank"
                  >
                    <button style={{ border: "none" }} className="none">
                      <img
                        className="img position-img3"
                        src="img/card-4.jpg"
                        alt="Image"
                      ></img>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <br />
            <div>
              <h3>Mới phát hành</h3>
              <div>
                <button className="button-list">Tất cả</button>
                <button className="button-list posi">Việt Nam</button>
                <button className="button-list posis">Quốc tế</button>
              </div>
              <br />
              <div className="display">
                <div className="col-lg-3">
                  {" "}
                  <div className="wrap-flex">
                    <button className="border" style={{ width: "100%" }}>
                      <img
                        className="img-song"
                        src="img/song-1.png"
                        alt="Image"
                      ></img>
                      <span>BigBang</span>
                    </button>
                    <br />
                    <br />
                    <button className="border" style={{ width: "100%" }}>
                      <img
                        className="img-song"
                        src="img/song-2.jpg"
                        alt="Image"
                      ></img>
                      <span>Charlie puth and jungkook</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-3 posi">
                  <div className="wrap-flex">
                    <button className="border" style={{ width: "100%" }}>
                      <img
                        className="img-song"
                        src="img/song-3.jpg"
                        alt="Image"
                      ></img>
                      <span>justin bieber</span>
                    </button>
                    <br />
                    <br />
                    <button className="border" style={{ width: "100%" }}>
                      <img
                        className="img-song"
                        src="img/song-4.jpg"
                        alt="Image"
                      ></img>
                      <span>michael jackson</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-3 posis">
                  <div className="wrap-flex">
                    <button className="border" style={{ width: "100%" }}>
                      <img
                        className="img-song"
                        src="img/song-5.jpg"
                        alt="Image"
                      ></img>
                      <span>Sơn Tùng MTP</span>
                    </button>
                    <br />
                    <br />
                    <button className="border" style={{ width: "100%" }}>
                      <img
                        className="img-song"
                        src="img/song-6.jpg"
                        alt="Image"
                      ></img>
                      <span>Soobin Hoàng Sơn</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}
export default Body;
