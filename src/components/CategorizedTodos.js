import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export default function CategorizedTodos({ todos, setTodos, setEditItem }) {
  const [categorizedTodos, setCategorizedTodos] = useState({});

  const categoryGroups = () => {
    // const sortedObj = {};
    // array.forEach((todo) => {
    //   // LOOKING to see if a key of item exists
    //   if (todo.category in sortedObj) {
    //   // if so, set the value of the key array to the spreaded object and the current todo
    //     sortedObj[todo.category] = [...sortedObj[todo.category], todo];
    //   } else {
    //   // if not, create the category and set the value as the current todo
    //     sortedObj[todo.category] = [todo];
    //   }
    // });

    // DOING THE SAME AS ABOVE USING REDUCE
    const sortedObj = todos.reduce((todoObject, currentObject) => {
      const main = todoObject;
      // if the current category already exists, push the currentObject into the array...otherwise, set the value to an array and push the currentObject into it.
      (main[currentObject.category] = main[currentObject.category] || []).push(
        currentObject,
      );
      return main;
    }, {});

    setCategorizedTodos(sortedObj);
  };

  useEffect(() => {
    categoryGroups();
  }, [todos]);

  return (
    <div>
      {Object.keys(categorizedTodos).map((category) => (
        <div key={category}>
          <h4>Category {category}</h4>
          {categorizedTodos[category].map((todo) => (
            <Todo
              key={todo.firebaseKey}
              taco={todo}
              setTodos={setTodos}
              setEditItem={setEditItem}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

CategorizedTodos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
