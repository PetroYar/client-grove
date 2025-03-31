"use client";
import { useEffect, useCallback } from "react";
import styles from "./ImageModal.module.scss";
import { IoClose } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const ImageModal = ({ images, selectedIndex, onClose, setSelectedIndex }) => {
  if (selectedIndex === null) return null;

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (event.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (event.key === "Escape") {
        onClose();
      }
    },
    [images.length, setSelectedIndex, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose/>
        </button>
        <button
          className={styles.prevButton}
          onClick={() =>
            setSelectedIndex(
              (prev) => (prev - 1 + images.length) % images.length
            )
          }
        >
          <FaArrowLeft/>
        </button>
        <img
          src={images[selectedIndex]?.image}
          alt="Selected"
          className={styles.modalImage}
        />
        <button
          className={styles.nextButton}
          onClick={() => setSelectedIndex((prev) => (prev + 1) % images.length)}
        >
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
