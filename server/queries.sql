-- this is the query you need to write into postgres to create your own database

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  content TEXT
);
