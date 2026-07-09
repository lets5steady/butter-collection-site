'use client';
import styles from './Hero.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);


    return(
        <div className={`${styles.embla} ${styles.container}`} ref={emblaRef}>
            <div className={styles.embla__container}>
                <div className={`${styles.embla__slide} ${styles.imgbox}`}>
                    <Link href='/#gift' aria-label='ギフト商品を見る'>
                        <Image
                            src='/images/hero-giftbox.jpg'
                            alt='ギフトボックス'
                            width={1100}
                            height={619}
                            loading="eager"
                        />
                    </Link>
                </div>
                <div className={`${styles.embla__slide} ${styles.imgbox}`}>
                    <Link href='/about' aria-label='aboutページへ移動'>
                        <Image
                            src='/images/hero-sable.jpg'
                            alt='こだわりのサブレディアマン'
                            width={1100}
                            height={619}
                            loading="eager"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}