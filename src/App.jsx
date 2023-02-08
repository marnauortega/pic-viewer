import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import ImageGrid from "./components/ImageGrid";
import Lightbox from "./components/Lightbox";
import runLenis from "./utils/lenis";

export default function App() {
  const fetchData = async (page) => {
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=bUKxlEabX8F4PW85us09Wl4M3JexnQbudWXQFidQRGQ&page=${page}&per_page=24`
    );
    const data = await res.json();
    const result = generateSplitArray(data, 3, 6);
    const mergedResult = result.map((column, index) => (imageGrid[index] ? [...imageGrid[index], ...column] : column));
    setImageGrid(mergedResult);
    setPage(page + 1);
  };

  const generateSplitArray = (array, columnNumber, columnLength) => {
    let currentArrayPart = array;
    const splitArray = [];
    for (let i = 0; i < columnNumber; i++) {
      const newArray = [...currentArrayPart];
      const subArray = newArray.splice(columnLength);
      currentArrayPart = subArray;
      splitArray[i] = newArray;
    }
    return splitArray;
  };

  const [imageGrid, setImageGrid] = useState([]);
  const [page, setPage] = useState(1);
  const [activeImage, setActiveImage] = useState("");
  const [lightboxShown, setLightboxShown] = useState(false);

  useEffect(() => {
    fetchData(page);
  }, []);

  // Prevent scrolling when lightbox open
  if (lightboxShown) {
    document.querySelector("body").style.height = "100%";
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.height = "auto";
    document.querySelector("body").style.overflow = "visible";
  }

  // Add smooth scroll
  runLenis();

  return (
    <main>
      <Controls setImageGrid={setImageGrid} setPage={setPage} fetchData={fetchData} />
      <ImageGrid
        imageGrid={imageGrid}
        fetchData={fetchData}
        page={page}
        setActiveImage={setActiveImage}
        setLightboxShown={setLightboxShown}
      />
      {lightboxShown && (
        <Lightbox activeImage={activeImage} lightboxShown={lightboxShown} setLightboxShown={setLightboxShown} />
      )}
    </main>
  );
}
