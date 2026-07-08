import SectionTitle from '../SectionTitle/SectionTitle';
import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import NewsList from '../NewsList/NewsList';

export default async function News() {
        const { contents: news} = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return(
        <section>
            <SectionTitle text='News' />
            <NewsList news={news} />
        </section>
    );
}