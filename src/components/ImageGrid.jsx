import InfiniteScroll from "react-infinite-scroll-component";

function ImageGrid({ imageGrid, fetchData, page, setActiveImage, setLightboxShown }) {
  return (
    <InfiniteScroll
      dataLength={imageGrid[0]?.length ?? 0}
      next={() => fetchData(page)}
      hasMore={true}
      loader={<h4>Cargando</h4>}
    >
      <div className="image-grid">
        {imageGrid?.map((column, index) => (
          <div className="column" key={index}>
            {column.map((image) => (
              <div key={image.id} className="image-wrapper">
                <img
                  src={image.urls.regular}
                  onClick={() => {
                    setActiveImage(image.urls.regular);
                    setLightboxShown(true);
                  }}
                  className="image"
                  width="500"
                  height="500"
                  alt={image.alt_description}
                />
                <p>{image.alt_description?.charAt(0).toUpperCase() + image.alt_description?.slice(1) || ""}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default ImageGrid;
