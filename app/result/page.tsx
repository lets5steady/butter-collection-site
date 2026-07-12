import MenuBar from "../_components/MenuBar/MenuBar";
import CookiesList from '@/app/_components/CookiesList/CookiesList';
import { getProducts } from '@/app/_libs/microcms';
import styles from './page.module.css';
import Link from "next/link";
import GiftList from "../_components/GiftList/GiftList";

type PageProps = {
    searchParams: Promise<{
        keyword: string;
    }>
};

export default async function page({searchParams}: PageProps) {
    const {keyword} = await searchParams;

    const cookies = await getProducts('cookie');
    const filteredCookies = cookies.filter(cookie =>
        cookie.name.includes(keyword.trim())
    );

    const gifts = await getProducts('gift');
    const filteredGift = gifts.filter(gift =>
        gift.name.includes(keyword.trim())
    );

    return(
        <>
            <MenuBar />
            <div className={styles.container}>
                <h2 className={styles.title}>- 検索結果 -</h2>
                <p className={styles.keyword}>検索キーワード：{keyword}</p>
                {filteredCookies.length !== 0 && <CookiesList cookies={filteredCookies} />}
                {filteredGift.length !== 0 && <GiftList gifts={filteredGift} />}
                <Link href='/#product' className={styles.link}>その他の商品はこちら</Link>
            </div>
        </>
    );
}
