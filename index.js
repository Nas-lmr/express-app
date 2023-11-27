const express = require("express");

const app = express();

const port = 5000;


app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
}); 



const getMovies = (req, res) => {
  res.status(200).json(movies)
};

app.get("/api/movies", getMovies);

app.get('/api/movies/:id', (req, res) => {


const movieId = parseInt(req.params.id);

const findMovies= movies.find(movies => movies.id === movieId);

if (findMovies) {
  res.status(200).json(findMovies);
} else {
  res.status(404).json('Not Found' );
};
});


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});


