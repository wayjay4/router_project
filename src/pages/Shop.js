import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Shop(){
  // declare fetchItems function
  const fetchItems = async () => {
    // set swapi api_url
    const api_url = "https://swapi.co/api/people/";

    // get data from api_url
    const data = await fetch(api_url);

    // decode recieved jsonData str to items
    const items = await data.json();

    // save results array to state
    setItems(items.results);

    // display data for troubleshooting
    //console.log("items:");
    //console.dir(items);
    //console.dir(items.results);
  };

  // execute fetchItems
  useEffect(() => {
    fetchItems();
  }, []);

  // declare the state
  const [items, setItems] = useState([]);

  // map the fetched 'items' array to the var shopItems
  const shopItems = items.map((item, index) => (
    <p key={index}><Link to={`/shop/${index+1}`}>{item.name}</Link></p>
  ));

  return (
    <div className="container">
      <header>
        <h1>This is the shop page</h1>
      </header>

      <div className="shop-items">
        {
          // display shopItems
          shopItems
        }
      </div>
    </div>
  );
}

export default Shop;
