import React from 'react';
import TodoFilter from './TodoFilter';
import renderer from 'react-test-renderer';

it('TodoFilter status="none" renders correctly', () => {
  const tree = renderer.create(
    <TodoFilter status="none" onSelectFilter={()=>{}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TodoFilter status="complete" renders correctly', () => {
  const tree = renderer.create(
    <TodoFilter status="complete" onSelectFilter={()=>{}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TodoFilter status="todo" renders correctly', () => {
  const tree = renderer.create(
    <TodoFilter status="todo" onSelectFilter={()=>{}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
