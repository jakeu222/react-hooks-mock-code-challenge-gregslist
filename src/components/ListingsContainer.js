import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingsData, removeListing }) {
  // listing usestate

  return (
    <main>
      <ul className="cards">
        {listingsData.map(listing => < ListingCard removeListing={removeListing} key={listing.id} listing={listing} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
