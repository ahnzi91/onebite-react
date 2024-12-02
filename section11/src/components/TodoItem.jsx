import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// export default memo(TodoItem, (prevProps, nextProps) => {
// 반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
// true : Props 바뀌지 않음 -> 리렌더링 X
// false : Props 바뀜 -> 리렌더링 O

// if (prevProps.id !== nextProps.id) return false;
// if (prevProps.isDone !== nextProps.isDone) return false;
// if (prevProps.content !== nextProps.content) return false;
// if (prevProps.date !== nextProps.date) return false;

// id, isDone, content, date가 바뀌지 않았다면 true 리턴
// return true;
// });

export default memo(TodoItem);
