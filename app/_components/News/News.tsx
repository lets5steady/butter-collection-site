import SectionTitle from '../SectionTitle/SectionTitle';
import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import NewsList from '../NewsList/NewsList';
import Hero from '../Hero/Hero';

export default async function News() {
        const { contents: news} = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return(
        <section>
            <Hero />
            <SectionTitle text='News' id='news'/>
            <NewsList news={news} />
        </section>
    );
}