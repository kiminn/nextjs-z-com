'use client';

import { signOut, useSession } from 'next-auth/react';
import style from './logoutButton.module.css';
import { useRouter } from 'next/router';

export default function LogoutButton() {
    const router = useRouter();
    //내 정보를 직접 불러올 수 있음 (only Client) data에 내 정보가 들어있을 것
    const { data: me } = useSession();

    // 내정보 없을 시
    if (!me?.user) {
        return null;
    }

    const onLogout = () => {
        signOut({ redirect: false }).then(() => {
            router.replace('/');
        });
    };

    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <img src={me.user?.image as string} alt={me.user?.id} />
            </div>
            <div className={style.logOutUserName}>
                <div>{me.user?.name}</div>
                <div>@{me.user?.id}</div>
            </div>
        </button>
    );
}
