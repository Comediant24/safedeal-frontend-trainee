import { API_URL } from '../utils/constatnts';

const getImages = () => {
  return fetch(`${API_URL}images`, {
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

const getImage = (id) => {
  return fetch(`${API_URL}images/${id}`, {
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export { getImages, getImage };
