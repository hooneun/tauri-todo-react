import React, { useState } from "react";
import { Form } from "semantic-ui-react";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <Form>
      <Form.Group>
        <Form.Input label="ADD Todo" type="text" value={text} onChange={(e) => {
          setText(e.target.value);
        }} />
      </Form.Group>
      <Form.Button primary type="submit" onClick={(e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
      }}>Add Todo</Form.Button>
    </Form>
  )
}
