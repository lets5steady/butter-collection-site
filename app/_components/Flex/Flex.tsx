import { ReactNode } from 'react';
import styles from './Flex.module.css';

type FlexProps = {
    children: ReactNode,
}

export default function Flex({children}:FlexProps) {
    return(
        <div className={styles.flex}>
            {children}
        </div>
    );
}