import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>- Sorry -</h2>
            <div className={styles.text}>
                <p className={styles.desc}>
                    アクセスしようとしたページは存在しない、もしくは現在準備中です。<br />
                    URLを再度ご確認ください。
                </p>
                <p className={styles.desc}>
                    <Link href='/#home' className={styles.link}>こちらから、Home画面に戻ることができます。</Link>
                </p>
            </div>
        </div>
    );
}