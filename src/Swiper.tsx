/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";

import SwiperNative from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import { NavigationMethods } from "swiper/types/modules/navigation";
import { PaginationMethods } from "swiper/types/modules/pagination";

import "swiper/css";
import "swiper/swiper-bundle.css";

import styles from "./Swiper.module.css";

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

type SwiperProps = {
  pagination?: PaginationMethods | boolean;
  //   navigation?: NavigationMethods | boolean;
  navigation?: boolean;
};

const Swiper: FC<SwiperProps> = ({ pagination, navigation }) => {
  const [swiper, setSwiper] = useState<SwiperNative>();

  const nextElementClass = useMemo(
    () => `right_arrow_${Date.now() + Math.random()}`.replaceAll(".", "_"),
    []
  );
  const prevElementClass = useMemo(
    () => `left_arrow_${Date.now() + Math.random()}`.replaceAll(".", "_"),
    []
  );

  useEffect(() => {
    const swiperInstance = new SwiperNative(".swiper", {
      autoplay: { delay: 1000 },
      loop: true,
      navigation: navigation
        ? {
            nextEl: `.${nextElementClass}`,
            prevEl: `.${prevElementClass}`,
          }
        : false,
      pagination: pagination
        ? {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
            dynamicBullets: true,
          }
        : false,
      modules: [Navigation, Pagination],
      width: 500,
    });

    setSwiper(swiperInstance);
  }, []);

  return (
    <div className={clsx("swiper", styles.main_container)}>
      {navigation && (
        <div
          className={clsx(
            "swiper-button-prev",
            styles.left_arrow,
            prevElementClass
          )}
        />
      )}
      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div key={index} className="swiper-slide">
            {image}
          </div>
        ))}
        {/* {navigation && (
          <>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </>
        )} */}
        {/* <div className="swiper-scrollbar" /> */}
      </div>
      {navigation && (
        <div
          className={clsx(
            "swiper-button-next",
            styles.right_arrow,
            nextElementClass
          )}
        />
      )}
      {pagination && (
        <div className={styles.pagination_container}>
          <div className="swiper-pagination" />
        </div>
      )}
    </div>
  );
};

export default Swiper;
