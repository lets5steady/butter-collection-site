"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css';
import HeaderNav from "../HeaderNav/HeaderNav";
import FixedMenu from "../FixedMenu/FixedMenu";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import { useState } from "react";
import logo from '@/assets/logo-big.png';


export default function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src={logo}
                        alt='butter-collctionのロゴ'
                        width={240}
                        height={180}
                        priority
                    />
                </Link>
            </h1>
            <HeaderNav />
            <FixedMenu setIsOpen={setIsOpen}/>
            {isOpen && <DrawerMenu setIsOpen={setIsOpen}/>}
        </header>
    );
}
