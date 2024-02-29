import React from 'react'
import './App.css';
import { Home } from './components/Home';
import { Cars } from './components/Cars';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {

        cars: [
          {name: "BMW", year: "2015"},
          {name: "Mercedes", year: "2020"},
          {name: "Mazda", year: "2006"},
          {name: "Volkswagen", year: "2002"},
          {name: "Ford", year: "2024"},
        ]
    }
  }


  render(){
    return(
      <div className='App'>

        <nav style={{textAlign:"center"}}>
          <ul style={{listStyle:"none"}}>
            <li><a href='/'>Home</a></li>
            <li><a href='/cars'>Cars</a></li>
          </ul>
        </nav>

        <hr/>

        <Home/>
        <div className='container'>
            <Cars cars={this.state.cars} />
        </div>
      </div>
    )
  }
  
}


export default App;