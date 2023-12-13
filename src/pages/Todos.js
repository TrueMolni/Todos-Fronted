import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Todo from '../components/Todo';

const BASE_URL = 'https://todos-backend-20ft.onrender.com/api/todos';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    // Завантаження даних з сервера при завантаженні сторінки
    axios
      .get(`${BASE_URL}`)
      .then(response => {
        setTodos(response.data);
        setLoading(false); // Дані завантажено, встановлюємо loading в false
      })
      .catch(error => {
        console.error('Помилка при отриманні даних:', error);
        setLoading(false); // При помилці також встановлюємо loading в false
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.c', {
        scrollTrigger: {
          trigger: '.c',
          start: 'top 50%',
          end: 'top 10%',
          // snap: 1,
          // scrub: 1,
          // markers: true,
          // toggleActions: 'restart pause reverse pause',
        },
        opacity: 1,
        x: 0,
        duration: 2,
        // ease: 'power4.out',
      });
    }
  }, [loading]);

  const completedCount = todos.filter(todo => todo.completed).length;

  const addTodo = () => {
    if (textInput.trim() !== '') {
      axios
        .post(`${BASE_URL}`, { text: textInput })
        .then(response => {
          setTodos(response.data);
          setTextInput('');
        })
        .catch(error => {
          console.error('Помилка при додаванні справи:', error);
        });
    }
  };

  const toggleTodo = id => {
    axios
      .put(`${BASE_URL}/${id}`)
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Помилка при відзначенні справи як виконаної:', error);
      });
  };
  const toggleAllTodos = completedBool => {
    axios
      .patch(`${BASE_URL}/toggleall`, { completed: completedBool })
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Помилка при зміні статусу всіх справ:', error);
      });
  };

  const deleteTodo = id => {
    axios
      .delete(`${BASE_URL}/${id}`)
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Помилка при видаленні справи:', error);
      });
  };

  return (
    <div className=" overflow-hidden App min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-8 gap-10">
      <h1 className="text-4xl mb-8">Список справ</h1>
      <div className="input-container mb-4 flex items-center">
        <input
          type="text"
          value={textInput}
          onChange={e => setTextInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
          className="rounded-l p-2 border-t border-b border-l border-gray-400 text-gray-900"
        />
        <button
          onClick={addTodo}
          className="ml-2 rounded-r p-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-700"
        >
          Додати
        </button>
      </div>
      <button
        onClick={() => {
          toggleAllTodos(true);
        }} // Встановлює всі справи як виконані
        className="rounded p-2 bg-green-500 text-white cursor-pointer"
      >
        Позначити все як виконане
      </button>
      <button
        onClick={() => toggleAllTodos(false)} // або toggleAllTodos(false);} // Встановлює всі справи як не виконані
        className="rounded p-2 bg-red-500 text-white cursor-pointer"
      >
        Позначити все як не виконане
      </button>
      <h2>Усього завдань: {todos.length}</h2>
      {completedCount === 0 ? (
        <p>Ви не виконали жодного завдання</p>
      ) : (
        <div className="mb-4 text-lg text-center">
          <span className="font-bold">Кількість виконаних справ: </span>
          {completedCount}
          <span
            className={`ml-2 ${
              completedCount < 5
                ? 'text-gray-500'
                : completedCount < 10
                ? 'text-green-500'
                : 'text-yellow-500'
            }`}
          >
            {completedCount < 5
              ? 'Так тримати'
              : completedCount < 10
              ? 'Молодець'
              : 'Зірка!'}
          </span>
        </div>
      )}
      {loading ? (
        <p>Завантаження даних...</p>
      ) : todos.length === 0 ? (
        <p>Дані відсутні.</p>
      ) : (
        <div className="translate-x-60 opacity-0 c todos flex flex-wrap gap-10 justify-center">
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodosPage;
