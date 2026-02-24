import "./App.css";

function App() {
  return (
    <>
      <h1>상품 목록</h1>
      <div id="productList">
        <ProductList />
      </div>
    </>
  );
}

const ProductList = () => {
  const Product = (num: number) => (
    <div key={num} className="product">
      <h3>상품 {num}</h3>
      <p>가격: {num * 10000}원</p>
      <button onClick={() => alert(`상품 ${num} 구매!`)}>구매하기</button>
    </div>
  );

  const productList = Array(10)
    .fill(0)
    .map((_, index) => Product(index + 1));

  return <>{productList}</>;
};

export default App;
