const InputTodo = (props) => {
  const { todoText, onChangeTodoText, plusOnClink, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="ブレイク"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button disabled={disabled} onClick={plusOnClink}>
        追加
      </button>
    </div>
  );
};

export default InputTodo;
