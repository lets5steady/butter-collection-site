import Image from 'next/image';
import styles from './GiftList.module.css';
import CartButton from '../CartButton/CartButton';
import { ProductType } from '@/app/_libs/microcms';

type GiftListProps = {
    gifts: ProductType[];
}

export default function GiftList({gifts}:GiftListProps) {

    return (
        <div className={styles.list}>
            {gifts.map((gift) => (
                <div
                className={styles.item}
                key={gift.id}
                >
                    <div className={styles.imgbox}>
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
