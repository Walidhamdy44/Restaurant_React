import React from "react";
import Fade from "react-reveal/Fade";

const BodyEl = ({ itemsData }) => {
  return (
    <div>
      <Fade left>
        {itemsData.length >= 1 ? (
          itemsData.map((item, index) => {
            return (
              <div className="box" key={index}>
                <div className="img">
                  <img src={item.imgUrl} alt="img"></img>
                </div>
                <div className="info">
                  <div className="price">
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                  </div>
                  <div className="text">
                    <p> {item.des}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="text-center m-4"> لا توجد اي بيانات</h2>
        )}
      </Fade>
    </div>
  );
};

export default BodyEl;
