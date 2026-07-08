import Image from 'next/image';
import styles from './Date.module.css';
import { formatDate } from '@/app/_libs/utils';
import clock from '@/assets/clock.png'

type DateProps = {
    date: string,
}

export default function Date({ date }: DateProps) {
    return (
        <span className={styles.date}>
            <Image src={clock} alt='' width={14} height={14} />
            {formatDate(date)}
        </span>
    );
}