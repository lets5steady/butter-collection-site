import styles from './Product.module.css';
import Image from 'next/image';
import CartButton from '../CartButton/CartButton';
import { getProducts } from '@/app/_libs/microcms';

export default async function Product() {

    const cookies = await getProducts('cookie');

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

export async function SubProduct() {
    const gifts = await getProducts('gift');

    return (
        <div className={styles.sub_list}>
        {gifts.map((gift) => (
            <div
            className={styles.sub_item}
            key={gift.id}
            >
            <div className={styles.sub_imgbox}>
                <Image
                className={styles.img}
                src={gift.image.url}
                alt={`${gift.name}の商品イメージ`}
                width={490}
                height={260}
                />
            </div>

            <dl className={styles.text}>
                <dt className={styles.name}>{gift.name}</dt>
                <dd className={styles.desc}>{gift.summary}</dd>
            </dl>
            <CartButton />
            </div>
        ))}
        </div>
    );
}