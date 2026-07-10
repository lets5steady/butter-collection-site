import MenuBar from "./_components/MenuBar/MenuBar";
import Hero from "./_components/Hero/Hero";
import SectionTitle from "./_components/SectionTitle/SectionTitle";
import Product, { SubProduct } from "./_components/Product/Product";
import Features from "./_components/Features/Features";
import Calendar from "./_components/Calendar/Calendar";
import Map from "./_components/Map/Map";
import Flex from "./_components/Flex/Flex";
import ShopData from "./_components/ShopData/ShopData";

export default function Home() {
  return (
    <>
      <MenuBar />
      <Hero />
      <SectionTitle text="Cookies" id="product"/>
      <Product />
      <SectionTitle text="Gift" id="gift"/>
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
