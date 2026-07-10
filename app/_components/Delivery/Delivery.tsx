import styles from './Delivery.module.css';
import Link from 'next/link';

export default function Delivery() {
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>- 配送/送料について -</h2>
            <div className={styles.list}>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>配送料金</dt>
                    <dd className={styles.text}>
                        <span>全国一律：880円（税込）</span>
                        <span>購入特典：1回のご注文につき、合計5,000円（税込）以上のお買い上げで送料無料となります。</span>
                    </dd>
                </dl>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>クール便の対応について</dt>
                    <dd className={styles.text}>
                        <span>クッキーの繊細な口どけと品質を維持するため、夏季期間は一律クール便（冷蔵）にて配送いたします。</span>
                        <span>*クール便の追加料金は発生いたしません。</span>
                    </dd>
                </dl>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>お届け日数と配送業者</dt>
                    <dd className={styles.text}>
                        <span>配送業者：キツネ運輸</span>
                        <span>お届け日数：ご注文完了後、1〜2営業日以内に発送いたします。</span>
                        <span>日時指定：ご注文日より3日目以降から、お届け日時をご指定いただけます。</span>
                    </dd>
                </dl>
            </div>
            <p className={styles.text}>
                <Link href='/#product' className={styles.link}>取り扱い商品はこちら</Link>
            </p>
        </section>
    );
}