"use client";
import { ArrowSquareLeft } from "phosphor-react";
import { useRouter } from "next/navigation";
const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button
        className="text-color-dark"
        onClick={handleBack}
        style={{ cursor: "pointer" }}
      >
        BACK
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-dark font-bold">{title}</h3>
    </div>
  );
};

export default Header;
