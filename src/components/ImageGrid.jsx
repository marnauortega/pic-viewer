import { useState, useEffect } from "react";
import { fetchData } from "./util/fetchData";

function ImageGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData("https://dog.ceo/api/breeds/image/random/24", setImages);
  }, []);

  return (
    <>
      <div className="image-grid">
        {images.length > 0 &&
          images.map((column) => (
            <div className="column">
              {column.map((url, index) => (
                <>
                  {/* TODO: change key for an id */}
                  <div className="imageWrapper">
                    <img src={url} className="image" width="500" height="500" alt="a random dog" />
                  </div>
                  {/* <p>{index}</p> */}
                </>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}

export default ImageGrid;
