import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const dataLine = {
  labels: ["1", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      label: "new",
      data: [10, 20, 13, 15, 22, 20, 25],
      fillColor: "red",
      borderColor: "red",
      backgroundColor: "red",
    },
  ],
};
const dataDoughnut = {
  datasets: [
    {
      data: [45, 30, 25],
      backgroundColor: ["purple", "red", "blue"],
      borderColor: "black",
    },
  ],
};
const firstRow = () => {
  return (
    <>
      <div className="col-lg-4 p-4">
        <div className="d-flex justify-content-between">
          <div>
            <p>Total Applications</p>
            <h2>7956</h2>
            <p>+3.59%</p>
          </div>
          <div>
            <Progress type="circle" percent={78} />
          </div>
        </div>
      </div>
      <div className="col-lg-4 p-4">
        <div className="d-flex justify-content-between">
          <div>
            <p>Total Applications</p>
            <h2>3556</h2>
            <p>+1.34%</p>
          </div>
          <div>
            <Progress type="circle" percent={60} />
          </div>
        </div>
      </div>
      <div className="col-lg-4 p-4">
        <div className="d-flex justify-content-between">
          <div>
            <p>Total Applications</p>
            <h2>3566</h2>
            <p>+7.59%</p>
          </div>
          <div>
            <Progress type="circle" percent={90} style={{ color: "red" }} />
          </div>
        </div>
      </div>
    </>
  );
};

const secondRow = () => {
  return (
    <>
      <div className="col-lg-8 p-5">
        <Line data={dataLine} height={100} />
      </div>
      <div className="col-lg-4 p-4">
        <p>Top Applications</p>
        <div className="d-flex justify-content-between pb-3">
          <li>Item</li>
          <div style={{ width: 200 }}>
            <Progress percent={30} status="success" />
          </div>
        </div>
        <div className="d-flex justify-content-between pb-3">
          <li>Item</li>
          <div style={{ width: 200 }}>
            <Progress percent={60} status="success" />
          </div>
        </div>
        <div className="d-flex justify-content-between pb-3">
          <li>Item</li>
          <div style={{ width: 200 }}>
            <Progress percent={45} status="success" />
          </div>
        </div>
        <div className="d-flex justify-content-between pb-3">
          <li>Item</li>
          <div style={{ width: 200 }}>
            <Progress percent={90} status="success" />
          </div>
        </div>
        <div className="d-flex justify-content-between pb-3">
          <li>Item</li>
          <div style={{ width: 200 }}>
            <Progress percent={70} status="success" />
          </div>
        </div>
      </div>
    </>
  );
};

const thirdRow = () => {
  return (
    <>
      <div className="col-lg-4">
        <h6 style={{ textAlign: "center" }}>Referals and Campaign Stats</h6>
        <br></br>
        <div className="d-flex justify-content-around">
          <div>
            <p>User Reached</p>
            <p>+3.59%</p>
            <h2>7956</h2>
          </div>
          <div>
            <p>Referals</p>
            <p>+3.59%</p>
            <h2>0356</h2>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn btn-primary">Start New Campaign Now</button>
        </div>
      </div>
      <div className="col-lg-4">
        <h6 style={{ textAlign: "center" }}>40 Campaign Sent in Toltal</h6>
        <br></br>
        <div className="d-flex justify-content-around">
          <div>
            <p>Shares</p>
            <p>+3.59%</p>
            <h2>7956</h2>
          </div>
          <div>
            <p>Applications</p>
            <p>+3.59%</p>
            <h2>0356</h2>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn btn-warning">Pause All Running Campaign</button>
        </div>
      </div>
      <div className="col-lg-4" style={styles.doughnut}>
        <Doughnut data={dataDoughnut} />
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="container-fuild" style={styles.outer}>
      <div className="row pb-5">{firstRow()}</div>
      <div className="row pb-5">{secondRow()}</div>
      <div className="row">{thirdRow()}</div>
    </div>
  );
};

const styles = {
  outer: {
    paddingTop: 30,
    paddingRight: 20,
  },
  doughnut: {
    paddingRight: 50,
    paddingLeft: 50,
  },
};

export default Body;
