import React from 'react';
import TodoInput from './TodoInput';
import renderer from 'react-test-renderer';

it('TodoInput renders correctly', () => {
  const tree = renderer.create(
    <TodoInput onAddTodo={()=>{}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
