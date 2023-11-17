import React, { useEffect } from "react";
import IncreaseLoveButton from "./components/IncreaseLoveButton";
import ListCastItem from "./components/ListCastItem";

function useTopicImage(imageUrl) {
  const [imageWidth, setImageWidth] = React.useState(0);
  const [imageHeight, setImageHeight] = React.useState(0);

  React.useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageWidth(img.width);
      setImageHeight(img.height);
    };
  }, [imageUrl]);

  return (
    <img
      src={imageUrl}
      alt="topic"
      style={{
        maxWidth: "100%",
        height: "auto",
        width: "100%",
        aspectRatio: `${imageWidth} / ${imageHeight}`, // Keep aspect ratio
      }}
    />
  );
}

function App() {
  const name = "Miss Do";
  const imageUrl = "/images/Q.JPG";
  const topicImage = useTopicImage(imageUrl);

  return (
    <article>
      {topicImage}

      <h1>
        Hello, <i style={{ color: "Red" }}> {name}</i>{" "}
      </h1>
      <h1>
        I
        <span
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "2em",
            color: "pink",
          }}
        >
          {" "}
          adore{" "}
        </span>
        you
      </h1>
      <p style={{ fontStyle: "italic", color: "purple" }}>
        You are nice, sweet, and original. <br></br>
        You light up my world!
      </p>
      <IncreaseLoveButton />
      <ListCastItem />
    </article>
  );
}

export default App;
