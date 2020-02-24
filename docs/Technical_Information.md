# Technical information for: duck-tales

## Approach

The approach taken to the problem was first to determine the scope of the project and necessary goals. The goals were determined to be as follows:

1. Time limitations, both professional and personal
2. Full stack application
3. Data input and display output
4. Hosting server and DB

Initial planning followed by answering each of those questions in turn.

(1) Utilize familiar technologies with prior experience, existing installations, and fast prototyping capabilities.

(2) PostgreSQL, Node, Express, Vue

(3) Form data input from a front end, back end processing, database storage. Follow up was consideration of database schema. As the project was relatively simple and no explicit direction followed from that end, it was decided to utilize only a single table. Follow-up would be to create a tracking table for the various locations and food types and tie that in with the main records table.

(4) Heroku and ElephantSQL were chosen as simple, fast, and free prototyping services.

## Technology choices

PostgreSQL was chosen for its simplicity and recent familiarity. The ability to quickly run queries for table setup, seeding test data, and retrieving data made it ideal for a quick project.

Express and Node were chosen due to my several years experience with Javascript. Node and Express are two very common technologies used together for their simplicity yet good functionality, in addition I personally have a few years experience with the combination.

Vue is a recent, self-learned, front-end library that I found to be much easier to rapid prototype with. I learned it as a challenge to myself to pick up a new technology and found it to match my thought processes well. I learned it within the last month but it feels very intuitive to me. The existing Vue-cli handled many build and compile configuration setups and saved much time.

## Component Diagram

- Stack diagram

```
(Database) <----> (Server) <----> (Frontend)
```

- Frontend components

```
APP
|
+-- NavBar
|     |
|     +--Vuetify tab bar
|
+-- FormDataInput
|     |
|     +--Vuetify form
|
+-- DataDisplay
      |
      +--Vuetify data iterator
            |
            +--Sort functionality
            +--Vuetify cards
            +--Pagination

```

## Time Spent

This project took roughly 10 hours of work, but not consecutively.
