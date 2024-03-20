'use client';

import style from './signup.module.css';
import onSubmit from '../_lib/signup';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import { useFormState, useFormStatus } from 'react-dom';

function showMessage(message: string | undefined) {
    if (message === 'no_id') {
        return '아이디를 입력하세요.';
    }
    if (message === 'no_name') {
        return '닉네임을 입력하세요.';
    }
    if (message === 'no_password') {
        return '비밀번호를 입력하세요.';
    }
    if (message === 'no_image') {
        return '이미지를 업로드하세요.';
    }
    if (message === 'user_exists') {
        return '이미 사용 중인 아이디입니다.';
    }
    return '';
}

export default function SignupModal() {
    // onSubmit넣어주면 useFormState가 관리하는 함수가됨 // 메세지 없을때는 에러메세지가 없다가 응답값에 따라 표시됨
    //useFormState(action, initialState, permalink?)
    //- `fn` : 양식을 제출하거나 버튼을 눌렀을 때 호출되는 함수 - `initialState` : 초기 상태
    const [state, formAction] = useFormState(onSubmit, { message: '' });
    const { pending } = useFormStatus();

    return (
        <>
            <div className={style.modalBackground}>
                <div className={style.modal}>
                    <div className={style.modalHeader}>
                        <BackButton />
                        <div>계정을 생성하세요.</div>
                    </div>
                    <form action={formAction}>
                        <div className={style.modalBody}>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="id">
                                    아이디
                                </label>
                                <input id="id" name="id" className={style.input} type="text" placeholder="" required />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="name">
                                    닉네임
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    className={style.input}
                                    type="text"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="password">
                                    비밀번호
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    className={style.input}
                                    type="password"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="image">
                                    프로필
                                </label>
                                <input
                                    id="image"
                                    name="image"
                                    required
                                    className={style.input}
                                    type="file"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                        <div className={style.modalFooter}>
                            <button type="submit" className={style.actionButton} disabled={pending}>
                                가입하기
                            </button>
                            <div className={style.error}>{showMessage(state?.message)}</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
