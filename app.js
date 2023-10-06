const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=training%20day';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '74652de46dmsh0d44d2930893ec6p112104jsn3512f8c9b70c',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  },
};

.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
    console.error(err);
});

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
