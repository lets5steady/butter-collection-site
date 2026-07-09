import { News } from '@/app/_libs/microcms';
import styles from './Article.module.css';
import Category from '../Category/Category';
import Date from '../Date/Date';
import Image from 'next/image';
import Link from 'next/link';

type ArticleProps = {
    data: News,
}

export default function Article({ data }: ArticleProps) {
    return (
        <article className={styles.container}>
            <div className={styles.meta}>
                <Link
                    href={`/news/category/${data.category.id}`}
                    className={styles.categoryLink}
                >
                    <Category category={data.category} />
                </Link>
                <Date date={data.publishedAt ?? data.createdAt} />
            </div>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.desc}>{data.description}</p>

            {data.thumbnail && (
                <Image
                    src={data.thumbnail.url}
                    alt='サムネイル'
                    className={styles.img}
                    width={400}
                    height={267}
                />
            )}

            <div className={styles.content}
                dangerouslySetInnerHTML={{
                    __html: data.content,
                }}
            />
            <Link href="/news" className={styles.link}>一覧へ戻る</Link>
        </article>
    );
}