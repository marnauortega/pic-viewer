import h1 from "../assets/img/h1.svg";

const Controls = ({ setPage, page, fetchData }) => {
  return (
    <>
      <h1>
        <img src={h1} alt="pic viewer main title" width="100%" />
      </h1>
      <div className="button-wrapper">
        <button
          onClick={() => {
            setPage(page + 1);
            fetchData(page + 1, true);
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
