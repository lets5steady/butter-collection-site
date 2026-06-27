import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return(
        <div className={styles.container}>
            <Image 
            className={styles.img}
            src='/giftbox03.jpg'
            alt='ヒーロー背景'
            width={1100}
            height={460}
            />
        </div>
    );
}