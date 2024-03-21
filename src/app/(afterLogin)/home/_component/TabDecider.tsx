"use client";

import {use} from "react";
import {TabContext} from "@/app/(afterLogin)/home/_component/TabProvider";
import PostRecommends from "@/app/(afterLogin)/home/_component/PostRecommends";
import FollowingPosts from "@/app/(afterLogin)/home/_component/FollowingPosts";

//탭이 추천이냐 아니냐에따라 전환
export default function TabDecider() {
  const { tab } = use(TabContext);
  if (tab === 'rec') {
    return <PostRecommends />
  }
  return <FollowingPosts />;
}