import styles from './Legal.module.css';
import Link from 'next/link';

export default function Legal() {
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>- 特定商取引法に基づく表記 -</h2>
            <div className={styles.list}>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>販売業者</dt>
                    <dd className={styles.text}>
                        <span>株式会社 Butter Collection</span>
                    </dd>
                </dl>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>代表責任者</dt>
                    <dd className={styles.text}>
                        <span>代表取締役社長 波多 久貴</span>
                    </dd>
                </dl>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>所在地</dt>
                    <dd className={styles.text}>
                        <span>兵庫県神戸市中央区京町67</span>
                    </dd>
                </dl>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>電話番号</dt>
                    <dd className={styles.text}>
                        <span>078-000-0000</span>
                    </dd>
                </dl>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>商品代金以外の必要料金</dt>
                    <dd className={styles.text}>
                        <span>送料：全国一律 880円（税込）<br />5,000円以上で送料無料</span>
                    </dd>
                </dl>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>返品・交換・キャンセルについて</dt>
                    <dd className={styles.text}>
                        <span>お客様都合によるキャンセル・返品：商品の性質上、出荷手配完了後のお客様都合によるキャンセル、返品、交換はお受けできません。</span>
                        <span>不良品による交換：商品の管理・発送には万全を期しておりますが、万が一お届けした商品に破損、あるいはご注文と異なる商品が届いた場合は、商品到着後3日以内に上記連絡先までご連絡ください。送料弊社負担にて代替品と交換させていただきます。</span>
                    </dd>
                </dl>

            </div>
            <p className={styles.text}>
                <Link href='/#product' className={styles.link}>取り扱い商品はこちら</Link>
            </p>
        </section>
    );
}