import Link from 'next/link';
import style from './trend.module.css';
export default function Trend() {
    return (
        //검색페이지로 이동
        <Link href={`/search?q=트렌드`} className={style.container}>
            <div className={style.count}>실시간트렌드</div>
            <div className={style.title}>kimi</div>
            <div className={style.count}>1,234 posts</div>
        </Link>
    );
}
