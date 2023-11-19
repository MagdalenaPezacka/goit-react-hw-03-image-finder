const API_KEY = '39666030-ea9dc56083af2dcfa2b4ed886';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(requestKey, page) {
  const url = `${BASE_URL}?q=${requestKey}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No response from server'));
  });
};
