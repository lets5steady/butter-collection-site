import styles from './SectionTitle.module.css';

type SectionTitleProps = {
    text: string;
    id?: string;
}

export default function SectionTitle({text , id}:SectionTitleProps) {
    return(
        <h2 className={styles.title} id={id}>
            {text}
        </h2>
    );
}