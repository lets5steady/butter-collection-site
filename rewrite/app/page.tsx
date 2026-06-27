import Image from "next/image";
import MenuBar from "./_components/MenuBar/MenuBar";
import Hero from "./_components/Hero/Hero";
import SectionTitle from "./_components/SectionTitle/SectionTitle";
import Product, { SubProduct } from "./_components/Product/Product";
import Features from "./_components/Features/Features";

export default function Home() {
  return (
    <>
      <MenuBar />
      <Hero />
      <SectionTitle text="Cookies"/>
      <Product />
      <SectionTitle text="Gift"/>
      <SubProduct />
      <Features />

    </>
  );
}
