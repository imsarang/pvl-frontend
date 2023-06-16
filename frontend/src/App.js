import "./App.css";
import Category from "./components/Category/Category";
import Sidebar from "./components/Sidebar/Sidebar";
import { FaPlus, FaSearch } from "react-icons/fa";
import { cardCategory, pagination } from "./components/general";
import Card from "./components/Card/Card";
import Page from "./components/Pagination/Page";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      {toggle ? <Sidebar /> : <></>}
      <div className="mainPage">
        <div className="mainPageCatHead">
          <div className="hamburger" onClick={() => setToggle(!toggle)}>
            <FaBars />
          </div>
          <div className="main1">
            Assert admin {">"} <span className="manage">Manage Categories</span>
          </div>
          <div className="main2">
            <button className="addButton">
              <FaPlus className="plusIcon" />
              <span className="addSpan">Add Catogory</span>
            </button>
          </div>
        </div>
        <Category />

        <div className="certificateHead">
          <div className="head1">Certificates under the category</div>
          <div className="head2">
            <div className="headInput">
              <input
                type="text"
                placeholder="Search Certificate"
                className="certificateInput"
              />
            </div>
            <div className="certificateSearch">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="mainCategoryCards">
          {cardCategory.map((item) => {
            return (
              <div className="cardMain">
                <Card heading={item.heading} value={item.value} />
              </div>
            );
          })}
        </div>

        <div className="pagination">
          {pagination.map((item) => {
            return (
              <div className="page">
                <Page text={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
