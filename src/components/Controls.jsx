import h1 from "../assets/img/h1.svg";

const Controls = ({ setImageGrid, setPage, fetchData }) => {
  return (
    <>
      <h1>
        <img src={h1} alt="pic viewer main title" width="100%" />
      </h1>
      <div className="button-wrapper">
        <button
          onClick={() => {
            setImageGrid([]);
            setPage(1);
            fetchData(1);
          }}
        >
          Cargar nuevas fotos
        </button>
        <div className="button-bg"></div>
      </div>
    </>
  );
};

export default Controls;
