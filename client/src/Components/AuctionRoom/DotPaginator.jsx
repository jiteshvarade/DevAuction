import React from 'react';

const DotPaginator = ({ totalRecords, rows, first, onPageChange }) => {
    const totalPages = Math.ceil(totalRecords / rows);
    const currentPage = first / rows;

    const handlePageChange = (pageIndex) => {
        onPageChange({
            first: pageIndex * rows,
            rows: rows
        });
    };
 
    return (
        <div className="flex justify-center mt-4 gap-2">
            
            {Array.from({ length: totalPages }, (_, index) => (
                <span
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                        currentPage === index ? 'bg-[#66bee3] shadow-[0px_0px_16px]' : 'border-2'
                    }`}
                    onClick={() => handlePageChange(index)}
                />
            ))}
        </div>
    );
};

export default DotPaginator;
