# iMentor

## Find a mentor in the Ironhack community

## Description

**iMentor** You started your journey as a developer at Ironhack. Do you need some advice? We give you the option to get in touch with some senior Ironhackers so you can find the best mentor to guide you through your new journey. With iMentor you will find the best mentor within the Ironhack community.

## User Stories

- **Error 4xx**- As a user, I want to see a clear error page when it doesn't exist/has restricted access so that I know I probably made a mistake.
- **Error 5xx** - As a user, I want to see a clear error page when the server generates problems so that I know that it is not my fault.
- **index/home** - As a user, I want to seamlessly access the index/home so that I know I'm the right place to begin the flow.
- **signup** - As a user, I want to signup in a secure and easy way on the webpage so that I can start using the app.
- **login** - As a user, I want to be able to log in on the webpage so that I can see my personal account.
- **logout** - As a user, I want to be able to log out from the webpage so that I can make sure no one will access my personal account.
- **edit profile** - As a user, I want to be able to edit my profile so that I can modify my personal data.
- **create questions** - As a user, I want to create my questions in an easy way so that I have a personal collection.
- **edit questions** - As a user, I want to keep update on all my questions.
- **delete questions** - As a user, I want to have the possibility to delete my questions.
- **filter questions** - As a user, I want to have the possibility to filter the questions of the community.

## Server Routes/Views

| **Method** | **Route**                    | **Description**                                       | **Request - Body**                                                               |
| ---------- | ---------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------- |
| `POST`     | `/signup`                    | Send signup data to server and creates an user in DB` | {username, email, password}                                                      |
| `POST`     | `/login`                     | Send login data to server                             | {email, password}                                                                |
| `GET`      | `/questions`                 | Get questions from the server                         | {req.session.currentUser.\_id}                                                   |
| `POST`     | `/questions`                 | Add new questions to the server                       | {req.session.currentUser.\_id}                                                   |
| `GET`      | `/questions/:id`             | Send questions from the server                        | {req.session.currentUser.\_id}                                                   |
| `POST`     | `/questions/:id/delete`      | Delete specific question from the server              | {req.session.currentUser.\_id}                                                   |
| `PATCH`    | `/questions/:id/edit`        | Edit specific question from the server                | {req.session.currentUser.\_id}                                                   |
| `POST`     | `/questions/:id/comment/add` | Send comment to specific question to the server       | {req.session.currentUser.\_id}                                                   |
| `GET`      | `/profile/:id`               | Get the profile of the user                           | {req.session.currentUser.\_id}                                                   |
| `PATCH`    | `/profile/:id/edit`          | Send the data updated by the user to the DB           | {req.session.userID, name, password, email, image, req.session.currentUser.\_id} |
| `GET`      | `/mentors`                   | Send the data of the mentors from the server          | {req.session.currentUser.\_id}                                                   |
| `POST`     | `/image`                     | Upload images to the database                         | {req.session.currentUser.\_id}                                                   |

## Models

### User schema

```javascript
{
  userType: String,
  email: String,
  password: String,
  username: String,
  aboutMe: String,
  profileImg: String,
  occupation: String,
  company: String,
  course: String,
  graduationYear: Number,
  comments: Array,
  questions: Array,
}

```

### Question schema

```javascript
{
    title: String,
    description: String,
    code: String,
    imageUrl: String,
    owner: ObjectID,
    Comments: Array,
    tags: [Array],
}
```

### Comments schema

```javascript
{
    text: String,
    name: String
}
```

[![Deploy on Railway](https://railway.app/button.svg)](https://imentor-client.up.railway.app)
