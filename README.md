# docker-express-nodejs
microservice with nodejs and docker

# start mongodb db
* mongod - in one terminal
* mongo - in another terminal

# db crud
* adding one item: POST localhost:3000/api/movie
{
    "name":"Avengers: Endgame",
    "time": ["14:15", "16:00", "21:30", "23:00"],
    "rating": 8.8
}
* updating that item: PUT localhost:3000/api/movie/<id>
{
    "name":"Avengers: Endgame",
    "time": ["12:00", "14:15", "16:00", "21:30", "23:00"],
    "rating": 8.8
}
* adding two more items: POST localhost:3000/api/movie
{
    "name": "The Lord Of The Rings: The return of the king",
    "time": ["15:00", "20:00"],
    "rating": 8.9
}
{
    "name": "The Godfather",
    "time": ["21:00", "23:50"],
    "rating": 9.2
}
* get all the movies: GET localhost:3000/api/movies
* get a specific movie: GET localhost:3000/api/movie/<id>
* delete movie: DELETE localhost:3000/api/movie/<id>