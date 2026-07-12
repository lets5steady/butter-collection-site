import MenuBar from "../_components/MenuBar/MenuBar";
import CookiesList from '@/app/_components/CookiesList/CookiesList';
import { getProducts } from '@/app/_libs/microcms';
import styles from './page.module.css';
import Link from "next/link";

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

    return(
        <>
            <MenuBar />
            <div className={styles.container}>
                <h2 className={styles.title}>- 検索結果 -</h2>
                <p className={styles.keyword}>検索キーワード：{keyword}</p>
                <CookiesList cookies={filteredCookies} />
                <Link href='/#product' className={styles.link}>その他の商品はこちら</Link>
            </div>
        </>
    );
}
