"use client";
import styles from "./Slider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Paragraph from "../../../paragraph/Paragraph";
import { formatDateShort } from "@/app/common/libs/formatDate";

const Slider = ({ data }) => {
  console.log(data)
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={30}
        className={styles.container}
        style={{ maxWidth: "100%", minHeight:'300px', overflow: "hidden", padding: "10px 15px 40px 15px" }}
       
        breakpoints={{
          550: { slidesPerView: 'auto' }, 
          0: { slidesPerView: 1 }, 
        }}
      >
        {data?.map((comment) => {
          return (
            <SwiperSlide className={styles.slide} key={comment._id}>
              <h6>{comment.userId.username}</h6>
              <p>{comment.description}</p>
              <span>{formatDateShort(comment.createdAt)}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
