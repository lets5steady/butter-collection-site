import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Map.module.css';

export default function Map() {
    return(
        <div className={styles.container}>
            <SectionTitle text='Map'/>
            <iframe className={styles.iframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.6653326202427!2d135.19056897574416!3d34.688395072924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008efbd89bef3f%3A0xda6fb2fcc3879f34!2z5Ym16YCg56S-44Oq44Kr44Os44Oz44OI44K544Kv44O844Or5LiJ5a6u5qCh!5e0!3m2!1sja!2sjp!4v1771643380304!5m2!1sja!2sjp" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}