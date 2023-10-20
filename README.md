# Todo List APP - Backend

This repo contains the backend express js code for the Todo List APPLICATION.

Frontend Repo - https://github.com/gauthking/ac-final-assignment


## API Reference 

Deployed Link - https://todo-api-7cnt.onrender.com

#### Get all Todos

```http
  GET /api/todos/get
```

#### Post Todo

```http
  POST /api/todos/post
```

| Req Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `todoName`      | `string` | **Required**. Name of the todo|
| `todoDescription`      | `string` | **Required**. Desc of the todo|

#### Update Todo

```http
  POST /api/todos/update/:id
```

| Req Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of the todo to be updated|

#### Delete Todo

```http
  POST /api/todos/delete/:id
```

| Req Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of the todo to be deleted|
