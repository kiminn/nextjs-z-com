'use client';

import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
    children: React.ReactNode;
};

function RQProvider({ children }: Props) {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                // react-query 전역 설정
                queries: {
                    //탭 전환시 데이터 새로 가져올것이냐?
                    refetchOnWindowFocus: false,
                    //컴포넌트 마운트 언마운트
                    retryOnMount: true,
                    //인터넷 연결 끊겼다가 재접속시
                    refetchOnReconnect: false,
                    //실패시 몇번 재접속할거냐 -> 난 걍 에러페이지 보여줄 것입니다. 나주에 useQuery 로 덮어쓸 수 있음ㅇㅇ
                    retry: false,
                },
            },
        })
    );

    return (
        <QueryClientProvider client={client}>
            {/* children에서 리액트쿼리 데이터를 전부 공유할 수 있음 */}
            {children}
            {/* devtools를 기본적으로 띄워놓을지말지 결정하는 옵션 -> 환경 변수로 관리*/}
            <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'} />
        </QueryClientProvider>
    );
}

export default RQProvider;
