"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (event) => {
    const keyword = searchRef.current.value.trim();
    if (!keyword) {
      return;
    }
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };



  return (
    <div className="relative">
      <input
        placeholder="Search For...."
        className="w-full bg-color-dark/80 text-color-light px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-primary placeholder-color-light border border-color-secondary/50"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} className="text-color-light" />
      </button>
    </div>
  );
};

export default InputSearch;
