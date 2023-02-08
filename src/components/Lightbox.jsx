import close from "../assets/img/close.svg";

const Lightbox = ({ activeImage, lightboxShown, setLightboxShown }) => {
  return (
    <>
      <div className={"lightbox fade-" + lightboxShown}>
        <img className="lightbox-image" src={activeImage} />
        <img
          className="close"
          src={close}
          onClick={() => {
            setLightboxShown(false);
          }}
          alt="close icon"
        />
      </div>
    </>
  );
};

export default Lightbox;
