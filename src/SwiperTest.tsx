import { FC, useEffect, useRef } from "react";

import NativeSwiper from "swiper";

type SwiperProps = {
  loop: boolean;
};

const images = [
  <div
    key="image1"
    style={{ width: "200px", height: "200px", background: "green" }}
  />,
  <div
    key="image2"
    style={{ width: "200px", height: "200px", background: "blue" }}
  />,
  <div
    key="image3"
    style={{ width: "200px", height: "200px", background: "red" }}
  />,
  <div
    key="image4"
    style={{ width: "200px", height: "200px", background: "yellow" }}
  />,
  <div
    key="image5"
    style={{ width: "200px", height: "200px", background: "brown" }}
  />,
];

const Swiper: FC<SwiperProps> = ({ loop }) => {
  const ref = useRef();

  useEffect(() => {
    const swipers = new NativeSwiper("", {
      loop: loop ?? false,
    });
  }, []);

  return (
    <div ref={ref} className="swiper">
      Swiper
    </div>
  );
};

export default Swiper;
