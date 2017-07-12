import React from 'react';
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";

const Todos = (props) => {
    return (
      <div>
        <TodoInput onAddTodo={props.onAddTodo} />
        <TodoList todos={props.todos} filter={props.filter} selectItem={props.onTodoClick} />
        <TodoFilter status={props.filter} onSelectFilter={props.filterTodo} />
      </div>
    );
}
export default Todos;
