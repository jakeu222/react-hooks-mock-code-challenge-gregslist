import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {

  const [listingsData, setListingsData] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setListingsData(data))
  }, []);



  const filteredListings = listingsData.filter(listing => {
    return listing.description.toLowerCase().includes(searchName.toLowerCase())
  })
  console.log(filteredListings);

  function removeListing(listingToRemove) {
    const newListingsData = listingsData.filter(listing => listing.id !== listingToRemove.id)
    setListingsData(newListingsData)
  }

  return (
    <div className="app">
      <Header setSearchName={setSearchName} />
      <ListingsContainer listingsData={filteredListings} removeListing={removeListing} />
    </div>
  );
}

export default App;
