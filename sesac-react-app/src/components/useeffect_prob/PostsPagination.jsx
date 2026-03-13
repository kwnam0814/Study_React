import axios from "axios";
import React, { useEffect, useState } from "react";

const PostsPagination = () => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0); // 전체 게시글 수 저장
  const [skip, setSkip] = useState(0); // API skip 파라미터 관리
  const LIMIT = 10; // 한 페이지당 표시할 개수

  useEffect(() => {
    const fetchPosts = async () => {
      // limit와 skip을 이용한 API 호출
      const response = await axios.get(
        `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`,
      );
      const data = response.data;
      setPosts(data.posts);
      setTotal(data.total);
    };

    fetchPosts();
  }, [skip]); // skip이 바뀔 때마다 다시 호출

  // 페이지 이동 로직
  const handlePageAction = (action) => {
    const lastSkip = Math.floor((total - 1) / LIMIT) * LIMIT;

    switch (action) {
      case "first":
        setSkip(0);
        break;
      case "prev":
        if (skip <= 0) alert("첫 페이지입니다");
        else setSkip(skip - LIMIT);
        break;
      case "next":
        if (skip + LIMIT >= total) alert("마지막 페이지입니다");
        else setSkip(skip + LIMIT);
        break;
      case "last":
        setSkip(lastSkip);
        break;
      default:
        break;
    }
  };

  // 버튼 정보를 배열로 관리 (템플릿 스타일 적용)
  const navButtons = [
    { label: "처음으로", action: "first" },
    { label: "이전", action: "prev" },
    { label: "다음", action: "next" },
    { label: "마지막으로", action: "last" },
  ];

  return (
    <div className="card p-6">
      <h1 className="text-2xl font-bold mb-4">Post Pagination</h1>

      {/* 상단 네비게이션 버튼 섹션 */}
      <div className="flex gap-2 mb-6 justify-center">
        {navButtons.map((btn) => (
          <button
            key={btn.action}
            className="button border px-4 py-2 rounded hover:bg-gray-100"
            onClick={() => handlePageAction(btn.action)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* 현재 페이지 정보 표시 */}
      <div className="text-center mb-4 text-sm text-gray-500">
        현재 페이지: {Math.floor(skip / LIMIT) + 1} / {Math.ceil(total / LIMIT)}
      </div>

      {/* 게시글 리스트 섹션 */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div className="card border p-4 rounded-lg shadow-sm" key={post.id}>
            <div className="font-bold text-lg mb-1">
              <span className="text-blue-500 mr-2">#{post.id}</span>
              {post.title}
            </div>
            <p className="text-gray-700 text-sm mb-3 line-clamp-2">
              {post.body}
            </p>
            <div className="flex justify-between text-xs text-gray-400 border-t pt-2">
              <span>Author ID: {post.userId}</span>
              <span>Views: {post.views}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPagination;
