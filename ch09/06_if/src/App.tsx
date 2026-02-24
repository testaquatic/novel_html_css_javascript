import { useState, type DetailedHTMLProps, type HTMLAttributes } from "react";

function App() {
  const P = ({
    style,
    ...props
  }: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >) => <p {...props} style={style}></p>;

  const [username, setUsername] = useState(() => "");
  const [password, setPassword] = useState(() => "");
  const [result, setResult] = useState(() => <></>);
  const checkLogin = (username: string, password: string) => {
    if (username === "admin" && password === "1234") {
      setResult(() => (
        <P style={{ color: "green" }}>로그인 성공! 환영합니다.</P>
      ));
    } else if (username === "" || password === "") {
      setResult(() => (
        <P style={{ color: "orange" }}>
          아이디와 비밀번호를 모두 입력해주세요.
        </P>
      ));
    } else {
      setResult(() => (
        <P style={{ color: "red" }}>아이디 또는 비밀번호가 틀렸습니다.</P>
      ));
    }
  };

  return (
    <>
      <input
        type="text"
        id="username"
        placeholder="아이디를 입력하세요"
        onChange={(ev) => setUsername(ev.target.value)}
        value={username}
      />
      <input
        type="password"
        id="password"
        placeholder="비밀번호를 입력하세요"
        onChange={(ev) => setPassword(ev.target.value)}
        value={password}
      />
      <button onClick={() => checkLogin(username, password)}>로그인</button>
      {result}
    </>
  );
}

export default App;
