"use client"
import { FinnTheHuman } from "@phosphor-icons/react";
import Link from "next/link";
const notFound = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FinnTheHuman size={50} className="text-color-primary" />
        <h1 className="font-bold text-2xl text-color-primary">BRUHH...ANIME NOT FOUND(CRY)</h1>
        <Link href="/" className="text-color-primary hover:text-color-accent text-xl underline transition-all">Kembali ke Beranda</Link>
      </div>
    </div>
  );
}

export default notFound