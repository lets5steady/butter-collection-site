import Link from 'next/link';
import styles from './Payment.module.css';

export default function Payment() {
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>- お支払い方法について -</h2>
            <div className={styles.list}>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>クレジットカード決済</dt>
                    <dd className={styles.text}>
                        <span>主要なクレジットカード会社に対応しております。</span>
                        <span>ご利用可能なカード：CrownCard、VortexPay、Auradlne、DignityClub</span>
                    </dd>
                </dl>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>スマホ決済</dt>
                    <dd className={styles.text}>
                        <span>お持ちのスマートフォンや各種アカウントと連携して簡単にお支払いいただけます。</span>
                        <span>ご利用可能な決済：NexPay、GlancePay、ZilchPay、OmniWallet</span>
                    </dd>
                </dl>
                <dl className={styles.item}>
                    <dt className={styles.crosshead}>注意事項</dt>
                    <dd className={styles.text}>
                        注文完了後の決済方法の変更はシステム上お受けできません。あらかじめご了承ください。
                    </dd>
                </dl>
            </div>
            <p className={styles.text}>
                <Link href='/#product' className={styles.link}>取り扱い商品はこちら</Link>
            </p>
        </section>
    );
}