'use client';

import { usePathname } from 'next/navigation';
import style from './trendSection.module.css';
import Trend from '@/app/(afterLogin)/_component/Trend';

export default function TrendSection() {
    // 나중에 서버에서 데이터를 불러와서 map으로 돌릴 부분
    const trends = Array.from({ length: 10 }, (_, index) => <Trend key={index} />);
    const pathname = usePathname();

    // 탐색하기에서는 나를위한 트렌드가 뜨지않는다
    if (pathname === '/explore') return null;

    return (
        <div className={style.trendBg}>
            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                {trends}
            </div>
        </div>
    );
}
