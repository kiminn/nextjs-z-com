import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <>
            <div>찾을 수 없는 페이지입니다. 다른 페이지를 검색해 보세요.</div>
            <Link href = "/search">검색</Link>
        </>
    );
};

export default NotFound;
