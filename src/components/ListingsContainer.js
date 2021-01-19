import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteClick}) {

  const allListings = listings.map((listing) => {
    return (
      <ListingCard listing={listing} key={listing.id} onDeleteClick={onDeleteClick} />
    )
  })

  return (
    <main>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
