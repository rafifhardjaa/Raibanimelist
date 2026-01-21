"use client"
import { FinnTheHuman } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
const notFound = () => {
  const Router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FinnTheHuman size={50} className="text-color-primary" />
        <h1 className="font-bold text-2xl text-color-primary">NOT FOUND(CRY)</h1>
        <button onClick={() => Router.back()} className="text-color-primary hover:text-color-accent text-xl underline transition-all">Back</button>
      </div>
    </div>
  );
}

export default notFound