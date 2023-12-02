import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const NavBar = ({ filterbySearch }) => {
  const [serchVal, setSerchVal] = useState("");
  const onSearch = () => {
    filterbySearch(serchVal);
    setSerchVal("");
  };
  return (
    <div>
      <div className="navbar">
        <Container>
          <div className="logo">مطعم جديد</div>
          <div className="search">
            <input
              type="text"
              placeholder="ابحث..."
              name="search"
              onChange={(e) => setSerchVal(e.target.value)}
              value={serchVal}
            ></input>
            <Button
              variant="light"
              onClick={() => {
                onSearch();
              }}
            >
              بحث
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
