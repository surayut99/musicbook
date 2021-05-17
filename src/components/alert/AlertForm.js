import { useEffect } from "react";

function AlertForm(props) {
  const { onFormClose, onFormConfirm } = props;

  function onFormUnmounted() {
    document.getElementById("content").className += " fade-out-content";
    document.getElementById("bg").className = "box-bg fade-out-bg";
    setTimeout(onFormClose, 1000);
  }

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  });

  return (
    <div id="bg" className="box-bg fade-in-bg content-float">
      <div
        id="content"
        className="content-center bg-white pt-3 overflow-hidden rounded content-md"
      >
        <div className="text-center">
          <h1>Are you Sure ?</h1>
          <p>{props.description}</p>
        </div>
        <div style={{ backgroundColor: "rgb(200, 200, 200)" }}>
          <div className="py-3 d-flex justify-content-center space-right">
            <button
              type="submit"
              className="btn btn-success"
              onClick={onFormUnmounted}
            >
              No
            </button>
            <div style={{ width: "1px", backgroundColor: "gray" }}></div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                onFormConfirm();
                onFormUnmounted();
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertForm;
