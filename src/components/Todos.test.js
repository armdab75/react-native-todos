import React from 'react';
import Todos from './Todos';
import renderer from 'react-test-renderer';

it('Todo renders correctly', () => {
  const tree = renderer.create(
    <Todos onAddTodo={()=>{}} todos={[]} filter='none' onTodoClick={()=>{}} filterTodo={()=>{}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
/* info 222*/
