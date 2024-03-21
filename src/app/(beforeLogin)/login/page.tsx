'use client';

import { useRouter } from 'next/navigation';
import Main from '@/app/(beforeLogin)/_component/Main';
import { useSession } from 'next-auth/react';

export default function Login() {
    const router = useRouter();
    //useSesion() 훅을 사용하면 로그인한 유저의 정보를 가져올 수 있다. (클라이언트 컴포넌트에서만 사용 가능)
    const { data: session } = useSession();

    if (session?.user) {
        router.replace('/home');
        return null;
    }

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
