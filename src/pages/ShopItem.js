import React, {useState, useEffect} from 'react';

function ShopItem({match}){
  useEffect(() => {
    const fetchItem = async () => {
      // set swapi api_url
      const api_url = `https://swapi.co/api/people/${match.params.id}`

      // get data from api_url
      const data = await fetch(api_url);

      // decode recieved jsonData str to item
      const item = await data.json();

      // save results array to state
      setItem(item)

      // display data for troubleshooting
      //console.log("item:");
      //console.dir(item);
    };
    
    fetchItem();
  }, [match]);

  const [item, setItem] = useState({});

  // display data for troubleshooting
  //console.dir(match);

  // return the ui view
  return (
    <div className="container">
      <header>
        <h1>This is the shopItem page</h1>
      </header>

      <div className="shop-item">
        <ul>
          <li><strong>Name:</strong> {item.name}</li>
          <li><strong>Gender:</strong> {item.gender}</li>
          <li><strong>Haircolor:</strong> {item.hair_color}</li>
          <li><strong>Weight:</strong> {item.mass}</li>
        </ul>
      </div>
    </div>
  );
}

export default ShopItem;
