import React, {useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json())
    .then(setListings)
  },[])


  function handleDeleteClick(id) {
    console.log(listings)
    const newListings = listings.filter((listing) => listing.id !== id);
    console.log(newListings)
    setListings(newListings);
   }

   const searchedListings = listings.filter((listing) => (
     listing.description.toLowerCase().includes(search.toLowerCase())
   ))

  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <ListingsContainer listings={searchedListings} onDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
