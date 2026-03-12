import axios from "axios";
import React, { useEffect, useState } from "react";

const CatGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=10",
      );
      //   console.log(response.data);
      setImages(response.data);
    };

    fetchCats();
  }, []); // ← 빈 배열: 처음 1번만 API 호출

  return (
    <div className="card">
      <div>CatGallery</div>
      <div className="flex flex-wrap">
        {images.map((image) => {
          return <img key={image.id} src={image.url} alt="" width={200} />;
        })}
      </div>
    </div>
  );
};

export default CatGallery;
