import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import BodyEl from "./components/BodyEl";
import { items } from "./data";
import { useState } from "react";
function App() {
  const [itemsData, setItemsData] = useState(items);
  // filter data
  const filterbyCatagury = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.catagury === cat);
      setItemsData(newArr);
    }
  };
  //
  // Search on data >
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    } else {
      window.alert("jj");
    }
  };
  //
  return (
    <div className="App">
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Heading filterbyCatagury={filterbyCatagury} />
        <BodyEl itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
