import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Calendar.module.css';

export default function Calendar() {
    return(
        <div className={styles.container}>
            <SectionTitle text='Calendar'/>
            <iframe 
                className={styles.iframe}
                title='営業カレンダー'
                src="https://calendar.google.com/calendar/embed?height=350&wkst=1&ctz=Asia%2FTokyo&showPrint=0&showTz=0&showCalendars=0&showTitle=0&title=Butter%20Collection-%E5%96%B6%E6%A5%AD%E3%82%B9%E3%82%B1%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB&src=OGNkYTkxMDQ2NGE2M2MxZWZiNjRkNDY3ZDZkOWQxYzY5MTJjOWIyYjIxMjU1ZTU2NWUzYjRlYWY1MmM5NjE0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YTliODYwYjk1ZTc4ODY4Y2YwZGEwZmMxZmI2OWQ1NDBlYmM1MzE2YjhjNjkwNjlhMDhjOGMzNDFjYzcwNGZmMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23b39ddb&color=%23a79b8e&color=%230b8043" ></iframe>
        </div>
    );
}