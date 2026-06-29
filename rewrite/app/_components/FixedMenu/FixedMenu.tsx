import Image from 'next/image';
import styles from './FixedMenu.module.css';

type FixedMenuProps = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FixedMenu({isOpen,setIsOpen}:FixedMenuProps) {
    return(
        <div className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button type="button" className={`${styles.drawerButton} ${styles.btn}`}
                    onClick={() => setIsOpen(prev => !prev)}>
                        <Image src="/menu.png" alt="メニュー"
                        width={24} height={24}/>
                        <p className={styles.label}>MENU</p>
                    </button>
                </li>
                <li className={styles.item}>
                    <button type="button" className={styles.btn}>
                        <Image src="/home.png" alt="ホーム"
                        width={24} height={24}/>
                        <p className={styles.label}>HOME</p>
                    </button>
                </li>
                <li className={styles.item}>
                    <button type="button" className={styles.btn}>
                        <Image src="/product.png" alt="商品"
                        width={24} height={24}/>
                        <p className={styles.label}>PRODUCT</p>
                    </button>
                </li>
                <li className={styles.item}>
                    <button type="button" className={styles.btn}>
                        <Image src="/access.png" alt="アクセス"
                        width={24} height={24}/>
                        <p className={styles.label}>ACCESS</p>
                    </button>
                </li>
                <li className={styles.item}>
                    <button type="button" className={styles.btn}>
                        <Image src="/cart.png" alt="カート"
                        width={24} height={24}/>
                        <p className={styles.label}>CART</p>
                    </button>
                </li>
            </ul>
        </div>
    );
}