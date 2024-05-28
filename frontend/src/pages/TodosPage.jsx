import React from 'react';
import AddTodoForm from '../components/AddTodoForm';
import TodoItem from '../components/TodoItem.jsx';
import readTodosRequest from '../api/readTodosRequest.js';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader.js';

const TodosPage = () => {
  const { isLoading, data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: readTodosRequest,
  });

  return (
    <>
      <AddTodoForm />
      <div className="py-2">
        {isLoading ? (
          <ClipLoader size={50} />
        ) : (
          <ul>
            {todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TodosPage;
