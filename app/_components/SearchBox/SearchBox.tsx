import Image from 'next/image';
import styles from './SearchBox.module.css';
import search from '@/assets/search.png';

type SearchBoxProps = {
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    inputData: string;
    handleSearch: () => void;
}

export default function SearchBox({onChange , inputData , handleSearch }:SearchBoxProps) {
    return(
        <div className={styles.inner}>
            <input type="text"
            placeholder='キーワードで検索'
            onChange={onChange}
            value={inputData}/>
            <button 
            className={styles.btn}
            type='button'
            onClick={handleSearch} 
            >
                <Image
                className={styles.img}
                src={search} alt='' width={24} height={24}
                />
            </button>
        </div>
    );
}