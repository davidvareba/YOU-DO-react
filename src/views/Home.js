import React from 'react';
import PropTypes from 'prop-types';
import CategorizedTodos from '../components/CategorizedTodos';

export default function Home({ todos, setTodos, setEditItem }) {
  return (
    <div className="mt-5">
      {todos.length ? (
        <CategorizedTodos
          todos={todos}
          setTodos={setTodos}
          setEditItem={setEditItem}
        />
      ) : (
        <h3>Add A YOU DO!</h3>
      )}
    </div>
  );
}

Home.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
