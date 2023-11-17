import { useState, useEffect } from "react";

export default () => {
  const [castImages, setCastImages] = useState([]);

  async function fetchCastImages() {
    try {
      const response = await fetch("public/cast.json");
      const castData = await response.json();
      setCastImages(castData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCastImages();
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      {castImages.map((item) => (
        <img
          src={`public/images/${item.slug}_tn.svg`}
          // alt={item.name}
          // style={{ width: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
};
