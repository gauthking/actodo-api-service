# Project Title

This is a full stack mobile application - Todo List - Android Club FFCS Final Project. 

NOTE: The backend API for this project is presenet in a separate repository - https://github.com/gauthking/actodo-api-service

## Members & Collaborators
[![karthik](https://img.shields.io/badge/Karthik-1DA1F2?style=for-the-badge&logo=github&logoColor=black)](https://github.com/darkpanther25)
[![karthik](https://img.shields.io/badge/Chrianjeev-1DA1F2?style=for-the-badge&logo=github&logoColor=black)]([https://github.com/darkpanther25](https://github.com/chiranjeev13))

## Tech Stack and Features

- Frontend - React Native
- Backend API - Express JS
- Database - MongoDB Atlas
- Number of Screens - Home Page, Create Todo Page, View Todo Page, Update Todo Page.

## Run Locally

Clone the project

```bash
  git clone https://github.com/gauthking/actodo-api-service
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npx expo start
```

if expo not installed then,

```bash
  npm i -g expo
```


  
## API Info 

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


## Implementation Screenshots and Videos 🚀

### Home Screen

![image](https://github.com/gauthking/actodo-api-service/assets/90638995/b54e3196-1f49-4179-be2d-bc6e35c4d3cf)

### Update Todo Screen

![image](https://github.com/gauthking/actodo-api-service/assets/90638995/cb9cbe1e-af74-4965-ad65-401101726eff)

### View Todo Page

![image](https://github.com/gauthking/actodo-api-service/assets/90638995/5feccc3b-e56f-4c99-ad0a-737f48c24119)

### Create Todo Page

![image](https://github.com/gauthking/actodo-api-service/assets/90638995/686109b9-4bb6-4101-8922-96b82231aa8d)


