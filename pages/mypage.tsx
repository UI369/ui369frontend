import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

const LandingPage: NextPage = () => {
  useEffect(() => {
    const imagePaths = [
      "images/image1.svg",
      "images/image2.svg",
      // Add more image paths as needed
    ];

    const gridContainer = document.getElementById("gridContainer");
    if (gridContainer) {
      // Clear the grid container before adding new grid items
      gridContainer.innerHTML = "";

      const numberOfColumns = 11;
      const numberOfRows = 11;
      const gridItemSize = Math.floor(
        gridContainer.offsetWidth / numberOfColumns
      );

      for (let row = 0; row < numberOfRows; row++) {
        for (let col = 0; col < numberOfColumns; col++) {
          const imgIndex = (row * numberOfColumns + col) % imagePaths.length;
          const imgPath = imagePaths[imgIndex];

          const gridItem = document.createElement("div");
          gridItem.className = `${styles.gameGridItem}`;
          gridItem.id = `gridItem${row}-${col}`;
          gridItem.style.height = `${gridItemSize}px`;
          gridItem.style.width = `${gridItemSize}px`;

          const img = document.createElement("img");
          img.src = imgPath;
          img.alt = `Image ${imgIndex + 1}`;

          gridItem.appendChild(img);
          gridContainer.appendChild(gridItem);
        }
      }
      gridContainer.style.maxHeight = `800px`; //`${gridItemSize * numberOfRows}`; //
      gridContainer.style.maxWidth = `800px`; //`${gridItemSize * numberOfColumns}`;
      console.log(gridItemSize);
      console.log(gridItemSize * numberOfRows);
    }
  }, []);

  return <div className={`${styles.gameGrid}`} id="gridContainer"></div>;
};

export default LandingPage;
