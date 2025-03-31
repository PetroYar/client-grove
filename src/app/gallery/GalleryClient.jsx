"use client"; // Вказуємо, що це клієнтський компонент

import { useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.scss";
import ImageModal from "./imageModal/ImageModal";

const GalleryClient = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <ul className={styles.gallery}>
        {data?.map((item, index) => (
          <li key={item._id} onClick={() => setSelectedIndex(index)}>
            <Image
              src={item.image}
              alt="Gallery Image"
              width={300}
              height={500}
              layout="intrinsic"
            />
          </li>
        ))}
      </ul>

      {selectedIndex !== null && (
        <ImageModal
          images={data}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          setSelectedIndex={setSelectedIndex}
        />
      )}
    </>
  );
};

export default GalleryClient;
