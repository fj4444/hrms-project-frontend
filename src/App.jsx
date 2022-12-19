import "bootstrap";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home/Home";
import SingleMatch from "./pages/SingleMatch";
import MultipleMatch from "./pages/MultipleMatch";
import Navbar from "./layouts/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Market from "./pages/Market";

function App() {
  return (
    <div id='App' className='d-flex flex-column'>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/singlematch' component={SingleMatch} />
            <Route exact path='/market/' component={Market} />
            <Route exact path='/multiplematch' component={MultipleMatch} />
          </Switch>
        </main>
        <Footer />
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
