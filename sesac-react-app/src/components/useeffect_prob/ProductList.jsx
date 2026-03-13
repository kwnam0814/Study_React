import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("id"); // 기본 정렬 기준
  const [order, setOrder] = useState("asc"); // 기본 정렬 순서
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const url = "https://dummyjson.com/products";
        const config = {
          params: {
            sortBy: sortBy,
            order: order,
          },
        };

        const response = await axios.get(url, config);

        // API 응답 구조: { products: [...], total: 100, ... }
        setProducts(response.data.products);
      } catch (error) {
        console.error("데이터 로드 실패:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [sortBy, order]); // 두 상태 중 하나만 바뀌어도 API 재호출

  // 정렬 변경 핸들러
  const changeSort = (newSortBy, newOrder) => {
    setSortBy(newSortBy);
    setOrder(newOrder);
  };

  if (isLoading) return <p>상품을 불러오는 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h2>
        📦 상품 목록 (정렬: {sortBy} / {order})
      </h2>

      {/* 정렬 버튼 그룹 */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button className="button" onClick={() => changeSort("id", "asc")}>
          ID 오름차순
        </button>
        <button className="button" onClick={() => changeSort("id", "desc")}>
          ID 내림차순
        </button>
        <button className="button" onClick={() => changeSort("price", "asc")}>
          가격 오름차순
        </button>
        <button className="button" onClick={() => changeSort("price", "desc")}>
          가격 내림차순
        </button>
        <button className="button" onClick={() => changeSort("rating", "asc")}>
          평점 오름차순
        </button>
        <button className="button" onClick={() => changeSort("rating", "desc")}>
          평점 내림차순
        </button>
      </div>

      <hr />

      {/* 상품 리스트 출력 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%", height: "120px", objectFit: "cover" }}
            />
            <h4 style={{ margin: "10px 0" }}>{product.title}</h4>
            <p style={{ fontSize: "12px", color: "#666" }}>ID: {product.id}</p>
            <p style={{ fontWeight: "bold" }}>가격: ${product.price}</p>
            <p style={{ color: "#f39c12" }}>평점: ⭐ {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
