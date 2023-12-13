const registerUser = async (username, password) => {
  try {
    await axios.post('/api/register', { username, password }).then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token);
    });
    // Редірект на сторінку входу після успішної реєстрації
    history.push('/login');
  } catch (error) {
    console.error('Помилка при реєстрації:', error);
  }
};

const loginUser = async (username, password) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    const token = response.data.token;
    // Зберегти токен в local storage
    localStorage.setItem('token', token);
    // Редірект на сторінку з картками після успішної аутентифікації
    history.push('/todos');
  } catch (error) {
    console.error('Помилка при вході:', error);
  }
};

const checkTokenValidity = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    // Редірект на сторінку входу, якщо токен відсутній
    history.push('/login');
  }
  // Перевірка токену на бекенді може бути реалізована також за допомогою axios та бекенд роуту
};
