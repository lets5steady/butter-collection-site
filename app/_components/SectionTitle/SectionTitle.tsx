import styles from './SectionTitle.module.css';

type SectionTitleProps = {text: string}

export default function SectionTitle({text}:SectionTitleProps) {
    return(
        <h2 className={styles.title}>
            {text}
        </h2>
    );
}