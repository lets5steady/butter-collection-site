type ProductType = {
    id: string;
    name: string;
    description: string;
    image: string;
};

export const cookies:ProductType[] = [
    {
        id: 'shortbread',
        name: 'ショートブレッド',
        description: '発酵バターを主役に据えた、最も純度の高い一枚。',
        image: '/images/shortbread.jpg',
    },
    {
        id: 'galette',
        name: 'ガレット',
        description: '外は香ばしく、内はほろりと崩れる。存在感で魅せる一枚。',
        image: '/images/galette.jpg',
    },
    {
        id: 'languedechat',
        name: 'ラングドシャ',
        description: '薄く、軽く、繊細に。余韻を楽しむ一枚。',
        image: '/images/languedechat.jpg',
    },
    {
        id: 'sablediamant',
        name: 'サブレディアマン',
        description: '縁にまとわせた砂糖が、繊細に輝く一枚。',
        image: '/images/sablediamant.jpg',
    },
    {
        id: 'florentins',
        name: 'フロランタン',
        description: '二層が重なり、味わいが立ち上がる一枚。',
        image: '/images/florentins.jpg',
    },
    {
        id: 'buttersand',
        name: 'バターサンド',
        description: '濃厚なクリームを重ねた、食感の違いを楽しむ一枚。',
        image: '/images/buttersand.jpg',
    },
    {
        id: 'jamsand',
        name: 'ジャムサンド',
        description: '甘みと酸味の対比を味わう一枚。',
        image: '/images/jamsand.jpg',
    },
    {
        id: 'bouledeneige',
        name: 'ブールドネージュ',
        description: '触れればほどける、やわらかな質感。',
        image: '/images/bouledeneige.jpg',
    },
    {
        id: 'icebox',
        name: 'アイスボックス',
        description: 'ほろ苦いココアと、発酵バターが溶け合う一枚。',
        image: '/images/icebox.jpg',
    }
]

export const gifts:ProductType[] = [
    {
        id: 'giftbox01',
        name: 'ギフトセット -large-',
        description: '定番クッキーとギフト限定クッキーを贅沢に味わうセット。',
        image: '/images/giftbox01.jpg',
    },
    {
        id: 'giftbox02',
        name: 'ギフトセット -small-',
        description: '人気商品を食べ比べできるセット。',
        image: '/images/giftbox02.jpg',
    },
]