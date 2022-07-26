import React from "react";
import { TodoListItem } from "./TodoListItem";
import { List } from "semantic-ui-react";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
};


export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </List>
  )
}
