import React from "react";
import { Button } from "react-bootstrap";

const Heading = ({ filterbyCatagury }) => {
  const filterFun = (cat) => {
    filterbyCatagury(cat);
  };
  return (
    <div>
      <div className="heading">
        <h2>قائمة الطعام</h2>
        <div className="btns">
          <Button onClick={() => filterFun("الكل")} variant="outline-warning">
            الكل
          </Button>
          <Button onClick={() => filterFun("افطار")} variant="outline-warning">
            الافطار
          </Button>
          <Button onClick={() => filterFun("غدا")} variant="outline-warning">
            الغداء
          </Button>
          <Button onClick={() => filterFun("عشاء")} variant="outline-warning">
            العشاء
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
