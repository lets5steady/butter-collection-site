import type { Category } from '@/app/_libs/microcms';
import styles from './Category.module.css';

type CategoryProps = {
    category: Category
}

export default function Category({ category }: CategoryProps) {
    return <span className={styles.tag}>{category.name}</span>
}