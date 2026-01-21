"use client";
import React from "react";

const CollectionsButton = ({ anime_mal_id, user_email }) => {
  const handleAddToCollection = async (event) => {
    event.preventDefault();
    const data = { anime_mal_id, user_email };
    const response = await fetch("/api/v1/collections", {
      method: "POST",
      body: JSON.stringify({ data }),
    });
    const collections = await response.json();
    console.log({ collections });
  };
  return (
    <button
      onClick={handleAddToCollection}
      className="px-2 py-1 mt-2 bg-color-accent font-medium rounded hover:bg-color-primary duration-300"
    >
      Add To Collection
    </button>
  );
};

export default CollectionsButton;
