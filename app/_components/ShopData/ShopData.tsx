import Image from 'next/image';
import styles from './ShopData.module.css';
import { shopData } from '@/data/shopData';
import Link from 'next/link';

export default function ShopData() {
    return(
        <div className={styles.container}>
            <div className={styles.imgbox}>
            <Image 
            className={styles.img}
            src='/images/shop.jpg'
            alt='店の外観'
            width={490}
            height={327}/>
            </div>
            <ul className={styles.list}>
                {shopData.map(data => (
                    <li key={data.id} className={styles.data}>
                        <span className={styles.name}>{data.name}</span>
                        <span className={styles.desc}>{data.description}</span>
                        {data.image && (
                            <div className={styles.icons}>
                                {data.image.map((img) => (
                                    <Link
                                        key={img.id}
                                        href={img.href}
                                        aria-label={img.ariaLabel}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Image
                                            className={styles.icon}
                                            src={img.src}
                                            alt=''
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}