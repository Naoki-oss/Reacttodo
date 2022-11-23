const Incomplete = (props) => {
  const { todos, deleteOnclick, compOnclick } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => compOnclick(index)}>完了</button>
              <button onClick={() => deleteOnclick(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Incomplete;
