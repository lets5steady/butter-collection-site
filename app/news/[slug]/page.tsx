import { Metadata } from 'next';
import { getNewsDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article/Article';
import { notFound } from 'next/navigation';
import MenuBar from '@/app/_components/MenuBar/MenuBar';

type PageProps = {
    params: Promise<{
        slug: string,
    }>,
    searchParams: Promise<{
        dk?: string;
    }>,
};

// ページごとのメタデータを生成する
export async function generateMetadata({
    params,
    searchParams,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const { dk } = await searchParams;

    const data = await getNewsDetail(slug, {
        draftKey: dk,
    }).catch(notFound);

    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
            images: data.thumbnail ? [data.thumbnail.url] : [],
        },
    };
}

export default async function page({params , searchParams}:PageProps) {
        const { slug } = await params;
    const { dk } = await searchParams;

    const data = await getNewsDetail(slug , {
        draftKey: dk,
    }).catch(notFound);

    return(
        <>
            <MenuBar />
            <Article data={data} />
        </>
    );
}
