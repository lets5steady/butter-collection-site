'use client';
import styles from './Slider.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { SliderItemType } from '../Hero/Hero';

type SliderProps = {
    items: SliderItemType[];
}

export default function Slider({items}:SliderProps) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);


    return(
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {items.map(item => (
                    <div className={styles.embla__slide} key={item.id}>
                        <div className={styles.imgbox}>
                            <Link href={item.href} aria-label={item.ariaLabel}>
                                <Image
                                    className={styles.img}
                                    src={item.image}
                                    alt=''
                                    width={1100}
                                    height={619}
                                    loading="eager"
                                />
                            </Link>
                    </div>
                </div>)
                )}
            </div>
        </div>
    );
}