import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsList.module.css';
import type { News } from '@/app/_libs/microcms';
import Category from '../Category/Category';
import Date from '../Date/Date';

type NewsListProps = {
    news: News[];
};

export default function NewsList({news}:NewsListProps) {
    return(
        <ul className={styles.list}>
            {news.map((article) => (
                <li key={article.id} className={styles.item}>
                    <Link href={`/news/${article.id}`} className={styles.link}>
                        {article.thumbnail ? (
                            <div className={styles.imgbox}>
                                <Image
                                    src={article.thumbnail.url}
                                    alt='サムネイル'
                                    className={styles.image}
                                    width={400}
                                    height={267}
                                />
                            </div>
                        ) :<div className={styles.imgbox}>
                                <Image
                                    src='/noimage.png'
                                    alt='No Image'
                                    className={styles.image}
                                    width={400}
                                    height={267}
                                />
                        </div>}

                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <Category category={article.category} />
                                <Date date={article.publishedAt ?? article.createdAt} />
                            </dd>
                        </dl>
                    </Link>
                </li>
            ))}
        </ul>
    );
}