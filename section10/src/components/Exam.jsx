import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로
function reducer(state, action) {
  // if (action.type === "INCREASE") {
  //   return state + action.data;
  // } else if (action.type === "DECREASE") {
  //   return state - action.data;
  // }

  // Action 객체에 type이 많아지게되면 일반적으로 swtich 문을 많이 사용합니다.
  //
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state + action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [count, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
