"use client"

import React, { useState, useEffect } from "react";
import useAxiosApi from "../hooks/useAxiosApi";
import { NewsApiResponse } from "@/types/types";

export default function Blog() {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const [page, setPage] = useState(1);

    const url = `https://newsapi.org/v2/top-headlines?q=health&page=${page}&pageSize=10&apiKey=${API_KEY}`;
    const { data, loading, error } = useAxiosApi<NewsApiResponse>(url);
    function handleNext() {
        setPage((prev) => prev + 1);
    }

    function handlePrevious() {
        setPage((prev) => (prev > 1 ? prev - 1 : 1));
    }

    if (loading) return <p>Carregando notícias...</p>;
    if (error) return <p>Erro ao carregar: {error}</p>;

    return (
        <div>
            {data?.articles.map((article, index) => (
                <div key={index}>
                    <h2>{article.title}</h2>
                    <img src={article.urlToImage} alt={article.title} width={300} />
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Ler mais</a>
                    <hr />
                </div>
            ))}

            <div style={{ marginTop: "20px" }}>
                <button onClick={handlePrevious} disabled={page === 1}>
                    Anterior
                </button>
                <button
                    onClick={handleNext}
                    disabled={data ? data.articles.length < 10 : true}
                >
                    Próxima
                </button>

            </div>
        </div>
    );
}
