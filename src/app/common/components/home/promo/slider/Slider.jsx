"use client";
import styles from "./Slider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import Image from "next/image";
import Paragraph from "../../../paragraph/Paragraph";

const Slider = ({ data }) => {
  return (
    <div className={styles.container}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={30}
        className={styles.slider}
        // centeredSlides={true}
        style={{
          maxWidth: "100%",
          minHeight: "300px",
          overflow: "hidden",
          padding: "10px 15px 40px 15px",
        }}
        breakpoints={{
          550: { slidesPerView: 2 },
          800: { slidesPerView: 3 },

          0: { slidesPerView: 1 },
        }}
      >
        {data?.map((product) => {
          return (
            <SwiperSlide className={styles.slide} key={product._id}>
              <div
                className={styles.image}
              
              >
                <Image
                  src={product.image}
                  alt="Gallery Image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <h6>{product.name}</h6>
              <Paragraph text={product.description} />
              {/* <p>{product.description}</p> */}
              <span>{product.price}грн</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
