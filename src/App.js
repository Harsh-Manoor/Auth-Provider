import { Container } from "react-bootstrap";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login"
import { BrowserRouter as Route, Router, Switch } from "react-router-dom"


function App() {
  return (
    
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route path="/" component={Dashboard}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={Login}/>
              </Switch>
            </AuthProvider>
          </Router>
        <SignUp/>
        </div>
      </Container>
  );
}

export default App;
