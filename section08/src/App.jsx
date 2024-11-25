import { useState, useRef } from "react";

import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

// Mock Data
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  // Mock Data와 겹치지 않게 id 값 3으로 초기화
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // todos와 같은 상태의 값은 반드시 상태 변화 함수를 호출해서  수정해야 한다.
    // 그래야만 변경된 state의 값을 React가 감지하고 컴포넌트를 정상적으로 리렌더링 할 수 있기 때문이다.
    // push() 메서드를 이용해서 state 값을 직접 변경하면 안되고, 무조건 상태 변화 함수인 setTodo를 호출하고 인수로 새로운 값을 넣어줘야 한다.
    // spread 연산자를 이용해서 기존의 todos 배열에 들어있던 값들을 펼쳐주어야 한다.
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;
