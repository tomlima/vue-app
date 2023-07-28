# Consuming API

The project was created with the aim of consuming a third-party API in an easy, fast and secure way. For this, it was structured in two directories called `backend` and `frontend`, respectively.

## Requirements

-   `Node version >= 14.x.x  `

## Backend

The backend was built with Node.js + Express and a request caching layer with [Axios Cache interceptor](https://axios-cache-interceptor.js.org/) and will serve as an API to receive requests from the frontend, consume the third party's api and return a response. We can say that we have our backend to act as a middleware in this case.

## Run backend

`cd backend` : Navigate to the root of the backend directory.

Rename `.env.example` file to `.env`

`npm install` : Install dependencies

`npm run start` : Start backend at port `3001`

## Backend API Reference

#### Get all articles

```http
  GET http://localhost:3001/api/article?q=Netflix&page=1
```

| Parameter | Type     | Description                                                           |
| :-------- | :------- | :-------------------------------------------------------------------- |
| `q`       | `string` | Any expression that will be a search parameter for articles.          |
| `page`    | `int`    | Which article page will be returned. (20 items are returned per page) |

## Frontend

The frontend was built with Vue 3 and it will serve as a SPA that will make a request to our backend and display a list of articles.
. In addition, a service worker for static content caching was added. ( Workbox )

## Run frontend

`cd frontend` : Navigate to the root of the frontend directory.

`npm install` : Install dependencies

`npm run serve` : To start frontend at port `8080`

`npm run build` : To build project

## Technologies and tools used.

Vue.js, Workbox, SCSS, Prettier, Node , Express, Axios and Axios Cache Interceptor.
