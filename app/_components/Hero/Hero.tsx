import { getLatestNews } from '@/app/_libs/microcms';
import Slider from '../Slider/Slider';

const latestNews = await getLatestNews();

export type SliderItemType = {
    id: string;
    image: string;
    href: string;
    ariaLabel: string;
};

const items: SliderItemType[] = [
  {
    id: 'gift',
    image: '/images/hero-giftbox.jpg',
    href: '/#gift',
    ariaLabel: 'ギフト商品を見る',
  },
    {
    id: 'about',
    image: '/images/hero-sable.jpg',
    href: '/about/#about',
    ariaLabel: 'aboutページへ移動',
  },
    {
    id: 'news',
    image: latestNews.thumbnail.url,
    href: '/news/#news',
    ariaLabel: 'newsページへ移動',
  },
];

export default function Hero() {

    return(
        <Slider items={items}/>
    );
}