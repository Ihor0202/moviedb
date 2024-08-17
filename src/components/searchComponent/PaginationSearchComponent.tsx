import React, {FC} from 'react';



type PaginationProps = {
    page: number;
    maxPage: number;
    onPageChange: (newPage: number) => void;
};
const PaginationSearchComponent: FC<PaginationProps> = ({ page, maxPage, onPageChange }) => {
    const handlePrevious = () => {
        if (page > 1) onPageChange(page - 1);
    };

    const handleNext = () => {
        if (page < maxPage) onPageChange(page + 1);
    };

    return (
        <div
            // className={styles.pagination}
        >
            <button onClick={handlePrevious} disabled={page === 1}>
                Previous
            </button>
            <span>{page} of {maxPage}</span>
            <button onClick={handleNext} disabled={page === maxPage}>
                Next
            </button>
        </div>
    );
};
export default PaginationSearchComponent;