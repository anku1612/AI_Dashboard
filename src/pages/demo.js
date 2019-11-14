import React from "react";
import '../css/MyRequirements.css';
import { FaEllipsisH } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const cardstyle = {
    background: "white",
    // display:"flex",
    padding: "20px 20px 0px 20px"
  }
  const cardheadstl = {
    textAlign: "right",
  }
export default function AuthExample() {
  return (
    <Router>
     <div className="container-fluid">
    <div className="profile">
      
    <div style={cardstyle}>
            <div className="d-flex req-skil-head">
              <div className="col-md-2 req_stl">
                <Link to="/public" className="req"> Requirements Client </Link>
              </div>
              <div className="col-md-1 p-0">
                <Link to="/protected" className="skill"> Skills </Link>
              </div>

              <div className="col-md-9" style={cardheadstl}>
                <FaEllipsisH />
              </div>
            </div>

          </div>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
        </div> </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
