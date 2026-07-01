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
            <Link href="/" className={styles.logoLink}>
                <Image
                    src={logo}
                    alt='butter-collctionのロゴ'
                    className={styles.logo}
                    width={240}
                    height={180}
                    priority
                />
            </Link>
            <HeaderNav />
            <FixedMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && <DrawerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </header>
    );
}
