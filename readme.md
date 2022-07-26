```js
import React from "react";
import styled from "styled-components";
import ImageComponent from "./ImageComponent";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

const imgData = [
  { src: img1, alt: "img1" },
  { src: img2, alt: "img2" },
  { src: img3, alt: "img3" },
  { src: img4, alt: "img4" },
  { src: img5, alt: "img5" },
  { src: img6, alt: "img6" },
  { src: img7, alt: "img7" },
  { src: img8, alt: "img8" },
];

const RenderList = imgData.map((img) => (
  <ImageComponent imgData={img} key={img.alt}></ImageComponent>
));

const Gallery = () => {
  return <GalleryContainer>{RenderList}</GalleryContainer>;
};

export default Gallery;

const GalleryContainer = styled.ul`
  width: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
`;
```

test
