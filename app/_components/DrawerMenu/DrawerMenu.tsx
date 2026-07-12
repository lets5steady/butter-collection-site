import Link from "next/link";
import styles from "./DrawerMenu.module.css";
import Image from "next/image";
import close from "@/assets/close.png";
import SearchBox from "../SearchBox/SearchBox";

type DrawerMenuProps = {
  handleToggle: () => void;
  isSearchOpen: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputData: string;
  handleSearch: () => void;
  setClose: () => void;
};

export default function DrawerMenu({
  handleToggle,
  isSearchOpen,
  onChange,
  inputData,
  handleSearch,
  setClose,
}: DrawerMenuProps) {

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.drawerMenu}>
        <button className={styles.btn} onClick={setClose}>
          <Image src={close} alt="閉じるボタン" width={24} height={24} />
        </button>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.searchArea}`}>
            <button className={styles.link} onClick={handleToggle}>
              Search
            </button>
            {isSearchOpen && (
              <div className={styles.searchBox}>
                <SearchBox
                  onChange={onChange}
                  inputData={inputData}
                  handleSearch={handleSearch}
                />
              </div>
            )}
          </li>
          <li className={styles.item}>
            <Link
              href="/mypage"
              className={styles.link}
              onClick={setClose}
            >
              MyPage
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="/about"
              className={styles.link}
              onClick={setClose}
            >
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="/news"
              className={styles.link}
              onClick={setClose}
            >
              News
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}