import { useState, useMemo, useContext } from "react";
import { TodoContext } from "../App";
import "./List.css";
import TodoItem from "./TodoItem";

const List = () => {
  const { todos } = useContext(TodoContext);

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLocaleLowerCase()));
  };

  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    // 전체 Todo 개수
    const totalCount = todos.length;

    // 완료된 Todo 개수
    const doneCount = todos.filter((todo) => todo.isDone).length;

    // 완료되지 않은 Todo 개수
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]); // [] : 의존성 배열. deps

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>Total : {totalCount}</div>
      <div>Done : {doneCount}</div>
      <div>Not Done : {notDoneCount}</div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요." />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
