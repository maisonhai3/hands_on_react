import React, { useEffect, useState } from "react";
import ListCast from "./components/ListCast";
import Modals from "./components/Modals";
import Nav from "./components/Nav";
import "./App.scss";

function App() {
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch("cast.json");
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <article>
      <div className="container">
        <hgroup>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="Quynh.jpg" alt="Star Fruit" style={{maxWidth: "50%", border: "5px solid purple", margin: "20px"}} />
            </div>
          <h1 style={{ marginTop: "30px" }}>Đây là Quỳnh</h1>
          <br></br>
          <p>
            A member of <b>How Coffee.</b> <br></br>
            <br></br>
            1. She is learning in an
            <span style={{ fontSize: "24px", color: "pink" }}>
              {" "}
              <i>art-of-words school</i>.
            </span>{" "}
            <br></br>
            <br></br>
            2. She loves to{" "}
            <span style={{ fontWeight: "bold", color: "lightpink" }}>
              running events and enjoys marketing.
            </span>{" "}
            <br></br>
            <br></br>
            3. She lives near the{" "}
            <span style={{ fontSize: "24px", color: "pink" }}>
              <i>West Lake</i>
            </span>
            , so she could
            <span style={{ fontSize: "32px", color: "hotpink" }}>
              {" "}
              run a full cycle around it
            </span>
            , surely.
            <br></br>
            <br></br>
            4. This picture is named "Cây Khế" as
            <span style={{ fontSize: "27px", color: "blue" }}>
              {" "}
              she was sad
            </span>{" "}
            as hell as a star fruit. <br></br>
            <br></br>
            5. She orders this site in
            <span
              style={{
                fontSize: "36px",
                color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 85%)`,
              }}
            >
              pastel color
            </span>{" "}
            , but I
            <span
              style={{
                fontSize: "26px",
                color: `lightgreen`,
              }}
            >
              don't know
            </span>{" "}
            how to make it.
            <br></br>
            <br></br>
            So, here is the site. <br></br>
            <br></br>
            <span style={{ fontSize: "20px", color: "purple" }}>
              I hope you enjoy it.
            </span>
            <br></br>
          </p>
        </hgroup>
      </div>
    </article>
  );
}
export default App;
