import React, {useState} from "react";

function ListingCard({listing, onDeleteClick}) {

  const [isFave, setIsFave] = useState(false)

  function handleFaveClick() {
    console.log('fave clicked')
    setIsFave(!isFave)
  }

  function handleDeleteClick(event) {
       // fetch(`http://localhost:6001/listings/${id}`, {
    //   method: "DELETE",
    // })
    onDeleteClick(event.target.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFave ? (
          <button className="emoji-button favorite active" onClick={handleFaveClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFaveClick} >☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button id={listing.id} className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
