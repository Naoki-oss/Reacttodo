const Incomp = (props) => {
  const { backOnclick, todos } = props;
  return (
    <div className="complete-area">
      <p className="title">完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => backOnclick(index)}>戻る</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Incomp;
