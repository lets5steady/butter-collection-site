type FeatureType = {
    id: string;
    name: string;
    description: string;
    image: string;
};

export const featuresData:FeatureType[] = [
    {
        id: 'feature01',
        name: 'おいしさへのこだわり',
        description: 'クッキーの賞味期限は発送日から21日後となりますが、焼きたてのバターの芳醇な香りを楽しんでいただくため、早めのお召し上がりをおすすめしております。',
        image: '/butter.jpg',
    },
    {
        id: 'feature02',
        name: '材料へのこだわり',
        description: '私たちが大切にしているのは、惜しみなく使うバターの存在感。バターの風味を存分に引き出すため、小麦、卵、牛乳など、こだわり抜いた材料のみを使用しています。',
        image: '/flour.jpg',
    },
    {
        id: 'feature03',
        name: 'パッケージへのこだわり',
        description: '大切な方へのプレゼントはもちろん、自分へのご褒美としても心躍る祝福の時間を体験していただきたいという思いから、すべての商品が特別なギフト仕様となっています。',
        image: '/giftbag.jpg',
    },
]