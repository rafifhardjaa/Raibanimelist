"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";

const inputSearch = () => {
  const searchRef = useRef();
  const handleSearch = () => {
    alert(searchRef.current.value);
  };
  return (
    <div className="relative">
      <input
        placeholder="Search For...."
        className="w-full p-2 rounded"
        ref={searchRef}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};
export default inputSearch;
