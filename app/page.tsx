import MenuBar from "./_components/MenuBar/MenuBar";
import Hero from "./_components/Hero/Hero";
import SectionTitle from "./_components/SectionTitle/SectionTitle";
import Product, { SubProduct } from "./_components/Product/Product";
import Features from "./_components/Features/Features";
import Calendar from "./_components/Calendar/Calendar";
import Map from "./_components/Map/Map";
import Flex from "./_components/Flex/Flex";
import ShopData from "./_components/ShopData/ShopData";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MenuBar />
      <Hero>
        <Image 
          src='/images/hero-giftbox.jpg'
          alt='ヒーロー背景'
          width={1100}
          height={619}
          loading="eager"
        />
      </Hero>
      <SectionTitle text="Cookies"/>
      <Product />
      <SectionTitle text="Gift"/>
      <SubProduct />
      <Features />
      <Flex>
        <Calendar />
        <Map />
      </Flex>
      <ShopData />
    </>
  );
}
