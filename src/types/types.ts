export interface Noticia {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: Noticia[];
}
