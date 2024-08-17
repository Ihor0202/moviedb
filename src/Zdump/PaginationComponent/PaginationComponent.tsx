'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Pagination.module.css';

interface PaginatorProps {
    page: number;
    maxPage: number;
    onPageChange: (newPage: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ page, maxPage, onPageChange }) => {
    const router = useRouter();

    const handleNextPage = () => {
        if (page < maxPage) {
            const nextPage = page + 1;
            onPageChange(nextPage);
            router.push(`/movie?page=${nextPage}`);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            const prevPage = page - 1;
            onPageChange(prevPage);
            router.push(`/movie?page=${prevPage}`);
        }
    };

    return (
        <div className={styles.paginationContainer}>
            <button onClick={handlePrevPage} disabled={page === 1}>
                Попередня
            </button>

            <p>Сторінка {page}</p>

            <button onClick={handleNextPage} disabled={page === maxPage}>
                Наступна
            </button>
        </div>
    );
};

export default Paginator;

// export default PaginationComponent;