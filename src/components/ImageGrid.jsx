import { useState, useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";

function ImageGrid() {
  const getKey = (pageIndex, previousPageData) => {
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData.length) return null;
    return `https://jsonplaceholder.typicode.com/photos?_page=${pageIndex}&_limit=5`;
  };
  const fetcher = async (url) => {
    const res = await fetch(url);
    const data = res.json();
    return data;
  };
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);
  const images = data?.flat();

  return (
    <>
      <div className="image-grid"></div>
      <InfiniteScroll
        dataLength={images?.length ?? 0} //This is important field to render the next data
        next={() => setSize(size + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {images?.map((image, index) => (
          <>
            {console.log("url", image)}
            <div className="imageWrapper">
              <img src={image.url} className="image" width="500" height="500" alt="a random dog" />
            </div>
          </>
        ))}
      </InfiniteScroll>
      {/* <button onClick={() => setSize(size + 1)}>More</button> */}
    </>
  );
}

export default ImageGrid;
