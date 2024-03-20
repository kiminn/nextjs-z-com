'use client';
import { useEffect } from 'react';

export const MSWComponent = () => {
    useEffect(() => {
        //window가 존재한다는 뜻(SSR환경에서는 윈도우가 존재하지 않는다)
        if (typeof window !== 'undefined') {
          //process.env.NEXT_PUBLIC_API_MOCKING이 "enabled"로 설정 되어있는 경우에만 mocking 활성화
            if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
              //api mocking활성화되면 "@/mocks/browser" 모듈 동적으로 불러옴
                require('@/mocks/browser');
            }
        }
    }, []);

    return null;
};

/*
browser에서 mockServiceWorker.js가 API요청을 가로채서
가짜 응답 반환하는데 필요한 설정. HTTP서버로 보내는 것 처럼 동작

이를 통해 개발자는 실제 API와 연결되지 않고도 가짜 데이터를 사용하여 애플리케이션을 개발하고 테스트할 수 있음
*/
