import MenuBar from "./_components/MenuBar/MenuBar";
import Hero from "./_components/Hero/Hero";
import SectionTitle from "./_components/SectionTitle/SectionTitle";
import Features from "./_components/Features/Features";
import Calendar from "./_components/Calendar/Calendar";
import Map from "./_components/Map/Map";
import Flex from "./_components/Flex/Flex";
import ShopData from "./_components/ShopData/ShopData";
import CookiesList from "./_components/CookiesList/CookiesList";
import GiftList from "./_components/GiftList/GiftList";
import { getProducts } from '@/app/_libs/microcms';


export default async function Home() {
  const cookies = await getProducts('cookie');
  const gifts = await getProducts('gift');

  return (
    <>
      <MenuBar />
      <Hero />
      <SectionTitle text="Cookies" id="product"/>
      <CookiesList cookies={cookies}/>
      <SectionTitle text="Gift" id="gift"/>
      <GiftList gifts={gifts}/>
      <Features />
      <Flex>
        <Calendar />
        <Map />
      </Flex>
      <ShopData />
    </>
  );
}
