import { useState, type ReactNode } from "react";
import MesaageResult from "./MessageReuslt";

function App() {
  const [username, setUsername] = useState(() => "");
  const [productName, setProductName] = useState(() => "");
  const [quantity, setQuantity] = useState<number | undefined>(() => undefined);
  const [message, setMessage] = useState<ReactNode | undefined>(
    () => undefined,
  );

  return (
    <div className="container">
      <h2>개인화 메시지 생성기</h2>

      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(ev) => setUsername(() => ev.target.value)}
        placeholder="이름을 입력하세요."
      />
      <input
        type="text"
        name="product_name"
        id="productName"
        value={productName}
        onChange={(ev) => setProductName(() => ev.target.value)}
        placeholder="상품명을 입력하세요"
      />
      <input
        type="number"
        name="quantity"
        id="quantity"
        placeholder="수량"
        value={quantity ?? ""}
        onChange={(ev) =>
          setQuantity(
            ev.target.value === "" ? undefined : () => Number(ev.target.value),
          )
        }
      />
      <button
        onClick={() =>
          generatMessage({
            username,
            productName,
            quantity,
            setMessage,
          })
        }
      >
        메시지 생성
      </button>
      {<MesaageResult>{message}</MesaageResult>}
    </div>
  );
}

type generatMessageOptions = {
  setMessage: React.Dispatch<React.SetStateAction<ReactNode>>;
  username: string;
  productName: string;
  quantity: number | undefined;
};

function generatMessage({
  username,
  productName,
  quantity,
  setMessage,
}: generatMessageOptions) {
  if (!username || !productName || !quantity) {
    alert("모든 정보를 입력해주세요!");
    return;
  }

  const message = (
    <>
      <h3>주문 확인</h3>
      <p>
        <strong>{username}</strong>님이 선택한 상품:
      </p>
      <ul>
        <li>상품명 : {productName}</li>
        <li>수량 : {quantity}개 </li>
        <li>주문 시간: {new Date().toLocaleString()}</li>
      </ul>
      <p>
        총 <strong style={{ color: "#ff6b6b" }}>{quantity}개</strong> 의{" "}
        {productName}이(가) 장바구니에 담겼습니다.
      </p>
    </>
  );

  setMessage(() => message);
}

export default App;
