import styles from './CookiesList.module.css';
import Image from 'next/image';
import CartButton from '../CartButton/CartButton';
import { ProductType } from '@/app/_libs/microcms';

type CookiesListProps = {
    cookies: ProductType[];
}

export default function CookiesList({cookies}:CookiesListProps) {


    return (
        <div className={styles.list}>
            {cookies.map(cookie => (
                <div className={styles.item}
                    key={cookie.id}>
                    <div className={styles.imgbox}>
                        <Image
                            className={styles.img}
                            src={cookie.image.url}
                            alt={`${cookie.name}の商品イメージ`}
                            width={290}
                            height={290} />
                    </div>
                    <dl className={styles.text}>
                        <dt className={styles.name}>{cookie.name}</dt>
                        <dd className={styles.desc}>{cookie.summary}</dd>
                    </dl>
                    <CartButton />
                </div>
            ))}
        </div>
    );
}
