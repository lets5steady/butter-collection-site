import Image from 'next/image';
import styles from './Features.module.css';
import { featuresData } from '@/data/features';

export default function Features() {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                {featuresData.map(data => (
                    <div key={data.id}
                        className={styles.box}>
                        <div className={styles.text}>
                            <h3 className={styles.name}>{data.name}</h3>
                            <p className={styles.desc}>{data.description}</p>
                        </div>
                        <div className={styles.imgbox}>
                            <Image
                                className={styles.img}
                                src={data.image}
                                alt={`${data.name}のイメージ画像`}
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}