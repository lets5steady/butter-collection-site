import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./AboutUs.module.css";
import Hero from "../Hero/Hero";

export default function AboutUs() {
    return (
    <div>
        <Hero>
            <Image src='/images/hero-sable.jpg' alt='こだわりのサブレディアマン' width={1100} height={619} loading="eager"/>
        </Hero>
        <section className={styles.container}>
            <SectionTitle text="About" />
            <div className={styles.about}>
                <h3 className={styles.title}>芳醇なバターが描く、至福のコレクション。</h3>
                <p className={styles.text}>
                    Butter Collectionは、上質な発酵バターの奥行きを味わうためのクッキー専門ブランドです。<br />
                    私たちが大切にしているのは、惜しみなく使うバターの存在感。<br />
                    ひと口目に広がる芳醇な香り、ほどけるような口どけ、そしてゆっくりと続く余韻。<br />
                    それは日常を少しだけ特別にする、贅沢なご褒美です。日常のひとときを、ささやかな祝福へと変える一枚を。
                </p>
                <p className={`${styles.text} ${styles.point}`}>Every Cookie a Sweet Celebration.</p>
            </div>
        </section>
    </div>
    );
}
