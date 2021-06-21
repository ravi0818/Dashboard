import React from "react";
import Img from "./img.png";
const myItem = () => {
  return (
    <div className="d-flex justify-content-between pb-3">
      <div>
        <div className="btn">
          <i className="fas fa-user"></i>
        </div>
        <div className="btn">
          <div>Full name</div>
        </div>
      </div>
      <div>
        <div className="btn">
          <i className="fas fa-envelope"></i>
        </div>
        <div className="btn">
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
};
const Sidebar = () => {
  const a = 6;
  return (
    <div className="container-fuild" style={styles.outer}>
      <div className="row">
        <div>
          <p style={{ textAlign: "center" }}>
            <br></br>Hello User,<br></br>You have 8 new applications Today!
          </p>
          <img src={Img} style={{ width: "100%" }}></img>
        </div>
        {myItem()}
        {myItem()}
        {myItem()}
        {myItem()}
        {myItem()}
        {myItem()}
        {myItem()}
      </div>
    </div>
  );
};

const styles = {
  outer: {
    paddingTop: 30,
    paddingRight: 20,
  },
};

export default Sidebar;
