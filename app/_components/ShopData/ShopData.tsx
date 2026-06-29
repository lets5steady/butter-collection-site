import Image from 'next/image';
import styles from './ShopData.module.css';
import { shopData } from '@/data/shopData';

export default function ShopData() {
    return(
        <div className={styles.container}>
            <div className={styles.imgbox}>
            <Image 
            className={styles.img}
            src='/shop.jpg'
            alt='店の外観'
            width={490}
            height={327}/>
            </div>
            {shopData.map(data => (
                <dl key={data.id} className={styles.data}>
                    <dt className={styles.name}>{data.name}</dt>
                    <dd className={styles.desc}>{data.description}</dd>
                    <div className={styles.icons}>
                        {data.image?.map(img => (
                            <Image className={styles.icon}
                            key={img}
                            src={img}
                            alt='アイコン'
                            width={24}
                            height={24}/>
                        ))}
                    </div>
                </dl>
            ))}
        </div>
    );
}