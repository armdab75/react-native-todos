import React from 'react';
import TodoItem from './TodoItem';
import renderer from 'react-test-renderer';
const label = "Item"

it('TodoItem renders correctly', () => {
  const tree = renderer.create(
    <TodoItem label="Item" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TodoItem renders correctly', () => {
  const tree = renderer.create(
    <TodoItem label={label} complete={true}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TodoItem label, complete = false', () => {
  const tree = renderer.create(
    <TodoItem label={label} complete={false}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TodoItem label, complete et onClick = vide', () => {
  const tree = renderer.create(
    <TodoItem label={label} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TodoItem onClick TEST', () => {
  const tree = renderer.create(
    <TodoItem label={label} onClick={()=>{}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
