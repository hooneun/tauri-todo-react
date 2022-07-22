import React from "react";
import { Checkbox, List } from "semantic-ui-react";

interface Props {
  todo: Todo,
  toggleTodo: ToggleTodo;
};

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <List.Item>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <Checkbox toggle type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        /> {' '}
        {todo.text}
      </label>
    </List.Item>
  );
};

