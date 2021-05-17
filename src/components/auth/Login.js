function Login() {
  return (
    <div>
      <div className="content-center bg-white py-3 overflow-hidden shadow-lg content-float content-sm">
        <div>
          <h1 className="text-center">Login</h1>
          <form>
            <div className="col-8 mx-auto">
              <div className="mb-2">
                <label>Username</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <div>
              <div className="py-3 d-flex justify-content-center space-right">
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
