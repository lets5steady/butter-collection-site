"use client";

import styles from "./Header.module.css";
import HeaderNav from "../HeaderNav/HeaderNav";
import FixedMenu from "../FixedMenu/FixedMenu";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import { useRouter } from 'next/navigation';

export default function Header() {
    //ドロワーメニューの開閉
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // SearchBoxの表示
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const handleToggle = () => {
        setIsSearchOpen((prev) => !prev);
    };

    // ドロワーメニューを閉じる際にSearchBoxも同時に閉じる処理
    const closeDrawerAndSearch = () => {
        setIsDrawerOpen(false);
        setIsSearchOpen(false)
    };

    // SearchBoxでの入力内容
    const [inputData, setInputData] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value);
    };

    const router = useRouter();

    // SearchBox内の検索ボタン押下時の処理
    const handleSearch = () => {
        if (!inputData.trim()) {
        alert("検索キーワードを入力してください");
        return;
        }

        router.push(`/result?keyword=${encodeURIComponent(inputData)}`);
    };

    return (
        <header className={styles.header} id="home">
            <HeaderLogo />
            <div className={styles.nav}>
                <HeaderNav onClick={handleToggle} isSearchOpen={isSearchOpen}/>
                {!isDrawerOpen && isSearchOpen && (
                    <div className={styles.headerSearchArea}>
                    <SearchBox
                        onChange={handleChange}
                        inputData={inputData}
                        handleSearch={handleSearch}
                    />
                    </div>
                )}
            </div>
            <FixedMenu setIsDrawerOpen={setIsDrawerOpen} />
            {isDrawerOpen && (
                <DrawerMenu
                    handleToggle={handleToggle}
                    isSearchOpen={isSearchOpen}
                    onChange={handleChange}
                    inputData={inputData}
                    handleSearch={handleSearch}
                    setClose={closeDrawerAndSearch}
                />
            )}
        </header>
    );
}
