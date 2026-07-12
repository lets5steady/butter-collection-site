import email from '@/assets/email.png';
import message from '@/assets/message.png';
import instagram from '@/assets/instagram.png';
import { StaticImageData } from 'next/image';

type IconType = {
    id: string;
    src: StaticImageData;
    ariaLabel: string;
    href: string;
};

type InfoType = {
    id: string;
    name: string;
    description?: string;
    image?: IconType[];
}

export const shopData:InfoType[] = [
    {
        id: 'address',
        name: '住所：',
        description: '兵庫県神戸市中央区京町67' ,
    },
        {
        id: 'openinghours',
        name: '営業時間：',
        description: '10:00〜19:00',
    },
    {
        id: 'closed',
        name: '定休日：',
        description: '月曜日' ,
    },
    {
        id: 'tel',
        name: 'TEL：',
        description: '078-000-0000' ,
    },
    {
        id: 'station',
        name: '最寄駅：',
        description: 'JR神戸線 三宮駅より徒歩12分' ,
    },
    {
        id: 'sns',
        name: 'SNS/お知らせ：',
        image: [
        {
            id: 'mail',
            src: email,
            ariaLabel: 'メールを送信',
            href: 'mailto:buttler-collection-example@example.com',
        },
        {
            id: 'line',
            src: message,
            ariaLabel: '公式LINEを開く',
            href: 'https://page.line.me/546erqbh'

        },
        {
            id: 'instagram',
            src: instagram,
            ariaLabel: '公式Instagramを開く',
            href: 'https://www.instagram.com/realstraykids/',
        }
    ]
    },
];