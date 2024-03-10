import style from './post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

//한글 플러그인
dayjs.locale('ko');
//상대시간
dayjs.extend(relativeTime);

export default function Post() {
    const target = {
        User: {
            id: 'elonmusk',
            nickname: 'Elon Musk',
            image: '/yRsRRjGO.jpg',
        },
        content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
        createdAt: new Date(),
        Images: [],
    };
    return (
        <article className={style.post}>
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link href={`/${target.User.id}`} className={style.postUserImage}>
                        <img src={target.User.image} alt={target.User.nickname} />
                        <div className={style.postShade} />
                    </Link>
                </div>
                <div className={style.postBody}>
                    <div className={style.postMeta}>
                        <Link href={`/${target.User.id}`}>
                            <span className={style.postUserName}>{target.User.nickname}</span>
                            &nbsp;
                            <span className={style.postUserId}>@{target.User.id}</span>
                            &nbsp; · &nbsp;
                        </Link>
                        {/* dayjs 글이 몇 초전 몇 분전에 쓰였는지? fromNow(true): ~전 안뜸*/}
                        <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
                    </div>
                    <div>{target.content}</div>
                    <div className={style.postImageSection}></div>
                    {/* 버튼은 client component */}
                    {/* <ActionButtons /> */}
                </div>
            </div>
        </article>
    );
}

/*
⚠️주의깊게 볼점⚠️
몸통의 아무 곳이나 클릭해도 상세 게시글 페이지로 넘어감
userId클릭시 user의 페이지로 넘어감
*/
