'use client';

import { useRouter } from 'next/navigation';
import Main from '@/app/(beforeLogin)/_component/Main';

export default function Login() {
    const router = useRouter();
    router.replace('/i/flow/login');
    return <Main />;
}

/*
"/login과 /i/flow/login" 차이
서버 쪽 리다이렉트가 되면 안됨. 
클라이언트에서 링크를 통해서 리다이렉트 해야지 우리가 원하는 인터셉팅이 됨
    1. “use client”로 클라이언트 컴포넌트로 전환 
    2. 클라이언트 컴포넌트에서는 리다이렉트 사용이 안되기 때문에 useRouter 훅으로 사용
    3. router.replace(’/i/flow/login’)로 변경
*/
