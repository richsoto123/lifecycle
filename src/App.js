import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  increment = () => {
    
  }

  componentDidMount(){
    //put code here 
    fetch('https://jsonplaceholder.typicode.com/users')

    .then( res  => {
      //console.log(res);
      return res.json();
    })
    .then(data => {     
      console.log(data);

      this.setState({
        isLoaded: true,
        items: data,      
      
      })
    })
    

  }

  render(){
    let { isLoaded, items} = this.state;
    if (!isLoaded) {
      return<div>Loading....</div>;
    } else {

    return (
      <div>
        <div>
          <ul>
            {}
          </ul>
        </div>
      </div>
    );
    }
    
  }
}
export default App;
