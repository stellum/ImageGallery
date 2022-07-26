import React, { useState, useEffect } from "react";
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

const Gallery = () => {
  // setImgSrc 스테이트는 이미지주소를 저장해줄 값
  const [imgSrc, setImgSrc] = useState("");
  const [popup, setPopup] = useState(true);
  useEffect(() => {
    console.log("갤러리", imgSrc);
  }, [imgSrc]);

  const handleBg = () => {
    // prev 가 true 고, 누를때마다 반대값이 반환되게 해줌
    setPopup((prev) => !prev);
  };

  return (
    <>
      <GalleryContainer>
        {/* 첫번째 파라미터 img 는 imgData 배열에 들어있는 각각의 소스들 */}
        {/* forEach 랑 map이랑 똑같은데 forEach는 그냥 순회를 하면서 작업을하는거고 map 메소드는 새로운 배열을 반환한다. */}
        {imgData.map((img) => (
          <ImageComponent
            imgData={img}
            key={img.alt}
            handleBg={handleBg}
            setImgSrc={setImgSrc}
          />
        ))}
      </GalleryContainer>
      <PopupDiv hidden={popup}>
        <img src={imgSrc.src} alt={imgSrc.alt} />
      </PopupDiv>
      {/* BgDiv 는 black값 */}
      <BgDiv hidden={popup} onClick={handleBg} />
    </>
  );
};

export default Gallery;

const PopupDiv = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: red;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const BgDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const GalleryContainer = styled.ul`
  width: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
`;
