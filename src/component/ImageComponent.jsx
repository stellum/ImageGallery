import React from "react";
import styled from "styled-components";

const ImageComponent = ({ imgData, handleBg, setImgSrc }) => {
  // const RenderImg = () => {};
  // const imgPopupFunc = () => {};
  // parameter 로 받아온값으로 함수 안에서 작업을 해줘야하기 때문
  function imgPopupFunc(imgData) {
    console.log("이미지컴포넌트", imgData.src);
    setImgSrc(imgData);
  }
  return (
    <GalleryImageList
      onClick={() => {
        // parameter 로 이미지 소스를 넘겨주고 있음
        imgPopupFunc(imgData), handleBg();
        console.log(imgData.src);
      }}
    >
      <img src={imgData.src} alt={imgData.alt} />
    </GalleryImageList>
  );
};

export default ImageComponent;

const GalleryImageList = styled.li`
  overflow: hidden;
  height: 255px;
  img {
    width: 100%;
    transition: transform 0.3s ease-in-out;
    object-fit: cover;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
