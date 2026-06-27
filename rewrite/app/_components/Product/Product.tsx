import { cookies } from '@/data/products';
import styles from './Product.module.css';
import Image from 'next/image';
import CartButton from '../CartButton/CartButton';

export default function Product() {
    return (
        <div className={styles.list}>
            {cookies.map(cookie => (
                <div className={styles.item}
                    key={cookie.id}>
                    <div className={styles.imgbox}>
                        <Image
                            className={styles.img}
                            src={cookie.image}
                            alt={`${cookie.name}の商品イメージ`}
                            width={290}
                            height={290} />
                    </div>
                    <dl className={styles.text}>
                        <dt className={styles.name}>{cookie.name}</dt>
                        <dd className={styles.desc}>{cookie.description}</dd>
                    </dl>
                    <CartButton />
                </div>
            ))}
        </div>
    );
}