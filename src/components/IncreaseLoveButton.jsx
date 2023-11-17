import { useState, useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    count && (document.title = `I adore you this much: ${count} hearts!`);
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        className="outline"
        style={{
          backgroundColor: "pink",
          border: "2px solid hotpink",
          color: "white",
          fontWeight: "bold",
        }}
        onClick={() => setCount(count + 1)}
      >
        <span
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.5em",
            color: "indigo",
          }}
        >
          Click here to increase my love for you! <br></br>
          <br></br>
          Now, it is {count} hearts!
        </span>
      </button>
    </div>
  );
};
