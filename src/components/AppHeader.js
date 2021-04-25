/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/App.css'

function AppHeader(props) {
  const {onClickCreatePost} = props
  return (
    <div>
      <nav className="px-3 navbar navbar-expand justify-content-between app-header">
        <div className="nav-item">
            <h1>musicbook
              <button onClick={onClickCreatePost} type="button" className="h-100 rounded-3 btn btn-primary align-middle mx-3">Create Post</button>
            </h1>
        </div>
        <div className="nav-item">
        </div>
        {/* <h1>My profile</h1> */}
      </nav>
    </div>  
    );
}

export default AppHeader;