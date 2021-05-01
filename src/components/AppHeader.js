/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/App.css";

function AppHeader(props) {
  const { onClickCreatePost } = props;
  return (
    <div className="app-header">
      <h1>musicbook</h1>
      <a onClick={onClickCreatePost} className="btn btn-primary">
        Create Post
      </a>
    </div>
  );
}

export default AppHeader;
