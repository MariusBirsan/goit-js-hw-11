export const ENDPOINT = 'https://pixabay.com/api/';
export const API_KEY = '40903961-e07635d5dbea58b7d17abeecb';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};
