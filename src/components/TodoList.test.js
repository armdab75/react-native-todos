import React from 'react';
import TodoList from './TodoList';
import renderer from 'react-test-renderer';

it('Todo renders correctly', () => {
  const tree = renderer.create(
    <TodoList todos={[]} filter="Item" selectItem={()=>{}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

/*test*/
