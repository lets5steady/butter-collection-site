import styles from './CartButton.module.css';

export default function CartButton() {
    return(
        <button type='button'
        className={styles.btn}>
            カートに入れる
        </button>
    );
}