function AlertForm(props) {
  const { onFormClose, onFormConfirm } = props;

  return (
    <div>
      <div className="bg-post-maker" onClick={onFormClose}></div>
      <div className="post-maker pt-3 overflow-hidden">
        <div className="text-center">
          <h1>Are you Sure ?</h1>
          <p>{props.description}</p>
        </div>
        <div style={{ backgroundColor: "rgb(200, 200, 200)" }}>
          <div className="py-3 d-flex justify-content-center space-right">
            <button
              type="submit"
              className="btn btn-success"
              onClick={onFormClose}
            >
              No
            </button>
            <div style={{ width: "1px", backgroundColor: "gray" }}></div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                onFormConfirm();
                onFormClose();
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
