import { useState } from "react";
import type { MainContentProps } from "./component";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";
import "./index.css";

const sidebarList = ["전자제품", "의류", "도서", "스포츠"];
const productData: MainContentProps["productData"] = [
  {
    title: "스마트폰",
    price: 299000,
    description: "최신 기술이 적용된 스마트폰입니다.",
  },
  {
    title: "노트북",
    price: 899000,
    description: "고성능 업무용 노트북입니다.",
  },
  {
    title: "헤드폰",
    price: 159000,
    description: "노이즈 캔슬링 기능이 있는 헤드폰입니다.",
  },
  {
    image: "⌚",
    title: "스마트워치",
    price: 249000,
    description: "건강 관리 기능이 포함된 스마트워치입니다.",
  },
  {
    title: "카메라",
    price: 1299000,
    description: "전문가용 미러리스 카메라입니다.",
  },
  {
    title: "모니터",
    price: 399000,
    description: "4K 해상도를 지원하는 모니터입니다.",
  },
];

function App() {
  const [sidebarDisplay, setSidebarDisplay] = useState(() => true);

  return (
    <>
      <button
        className={`toggle-sidebar`}
        onClick={() => setSidebarDisplay((prev) => !prev)}
      >
        사이드바 토글
      </button>
      <div
        className={`layout ${sidebarDisplay ? "" : "no-sidebar"}`}
        id="layout"
      >
        <Sidebar listData={sidebarList} />
        <MainContent productData={productData} />
      </div>
    </>
  );
}

export default App;
