import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
       items: [],
       isLoaded: false,
    }
  }
  
  // since this method is already bound to the library, we don't need to use a
  // arrow function
  // this function allows us to do a API call
  componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => {
          // catch the response as the arg and put into json format. We can parse it or break it down
          // into data. 
          return res.json();
       })
       .then(data => {
           console.log(data);
           this.setState({
               items: data,
               isLoaded: true,
           });
       });
  }

  render() {
    // ES6
    let {items, isLoaded} = this.state;

    // Another method is conditional rendering:
    /*
     This if statement ensures that items is not an empty array, so that we can really manipulate in the else block
     if(!isLoaded) { 
         return ( <div> Loading... </div>);
     }
     else {
         return (
            <div>
               display page
            </div>
         )
     }
    */
     
     return (
      <div> 
         <div> 
             <ul>
                {items.map(items =>
                  <li> Name: {items.name} | Username: {items.username} | Email: {items.email} | <a href={"http://"+items.website}> website </a> </li>
                )}
             </ul>
         </div>
      </div>
    );
  }
}

export default App;