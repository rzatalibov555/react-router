import React from 'react'
import './App.css';
// import {Route, Switch} from 'react-router-dom';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home } from './components/Home';
import { Cars } from './components/Cars';
// import { Navbar } from './components/Navbar';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      cars: [
        { name: "BMW", year: "2015" },
        { name: "Mercedes", year: "2020" },
        { name: "Mazda", year: "2006" },
        { name: "Volkswagen", year: "2002" },
        { name: "Ford", year: "2024" },
      ]
    }
  }


  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <nav style={{ textAlign: "center" }}>
            <ul style={{ listStyle: "none" }}>
              <li style={{ display: "inline-block", marginRight: "10px" }}>

                <NavLink to="/">Home</NavLink>
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <NavLink to='/cars'>Cars</NavLink></li>
            </ul>
          </nav>
        </BrowserRouter>


        <hr />

        {/* <Home/> */}
        {/* <Route path='/' component={Home} /> */}




        <div className='container'>

          <BrowserRouter>
            <Routes>
              {/* <Navbar/> */}
              <Route path="/" element={<Home />} />
              {/* OR */}
              {/* <Route path="/" Component={Home} /> */}

              <Route path="/cars" element={<Cars cars={this.state.cars} />} />
              {/* OR */}
              {/* <Route path='/cars'>
                <Cars cars={this.state.cars} />
              </Route> */}



            </Routes>
          </BrowserRouter>

          {/* <Cars cars={this.state.cars} /> */}
        </div>
      </div>
    )
  }

}


export default App;