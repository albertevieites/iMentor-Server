# iMentor: Find a mentor in the Ironhack community

## Description

**iMentor** You started your journey as a developer at Ironhack. Do you need some advice? We give you the option to get in touch with some senior Ironhackers so you can find the best mentor to guide you through your new journey. With iMentor you will find the best mentor within the Ironhack community.

## User Stories

- **Error 4xx**- As a user, I want to see a clear error page when it doesn't exist/has restricted access so that I know I probably make a mistake.
- **Error 5xx** -  As a user, I want to see a clear error page when problems are generated by the server so that I know that is not my fault.
- **index/home** - As a user, I want to seamless access the index/home so that I know I'm the right place to begin the flow.
- **signup** - As a user, I want to signup in a secure and easy way on the webpage so that I can start using the app.
- **login** - As a user, I want to be able to login on the webpage so that I can see my personal account.
- **logout** - As a user, I want to be able to logout from the webpage so that I can make sure no one will access my personal account.
- **edit profile** - As a user, I want to be able to edit my profile so that I can modify my personal data.
- **create article** - As a user, I want to create my articles in an easy way so that I have a personal collection and stay in touch with my favorite categories.
- **Categories** - As a user, I want to keep update in all the categories that I've chosen.

## Server Routes/Views:

|**Method**    |    **View**           |    **Route**     |   **Description**       |          **Request - Body**                     |
|--------------|-------------------|------------------------|-----------------------------------|---------------------|
|`GET`         |   `index`            |      `/`               | Main page route for `ìndex` or `home` view. If not logged redirect to `/login`  |   {req.session.currentUser._id} |
|`GET`         | `signup`            |    `/signup`           | Render `signup`form view          |                     |
|`POST`        |  `signup`           |    `/signup`           | Send signup data to server and creates an user in DB. Then redirect to `/categories`                                   |          {username, email, password}           |
|`GET`         |  `login`           |      `/login`          | Render `login`form view           |                     |
|`POST`        |   `login`          |      `/login`          | Send login data to server and redirect to `index`     | {email, password,categories}            |
|`GET`         |   `categories`          |      `/categories`           | Render `categories`view                | {req.session.currentUser._id}    |
|`POST`        |    `categories`         |      `/categories`     | Sends ObjID of the categories that user choose. Then redirect `/`   | {req.session.currentUser._id} |
|`GET`        |    `profile`         |      `/profile/:add`     | Render `post-creation`view  |  |
|`GET`         |     `profile`        |      `/profile`        | Render `profile`view             | {req.session.currentUser._id}                    |
|`POST`        |    `profile`         |      `/profile/:user:id` | Send the data updated by the user to the DB. Then render `profile`view  | {req.session.userID, name, password, email, category, image, req.session.currentUser._id}  |
|`POST`        |    `logout`         |      `/logout` | Redirect to `/login`  |   |

### Backlog
| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/inbox` | Render inbox messages|

## Models

### User

```javascript
{
username: String
password: String
email: String
Cagtegory: ObjectId
image: String
}

```
### Article

```javascript
{
title: String
description: String
url: String
source: String
image: String
category: ObjectId
language: String
published_at: Date
}
```
### Category
```javascript
{
name: String
}
```

### Contributors

Corina Perjan - [`Github`](https://github.com/corinaper) - [`<linkedin`](https://www.linkedin.com/in/corina-perjan/)

Alberte Vieites - [`Github`](https://github.com/albertevieites) - [`linkedin`](https://www.linkedin.com/in/albertevieites/)

Adrian Molina - [`Github`](https://github.com/01000001kuma) - [`linkedin`](https://www.linkedin.com/in/adrian-molina/)

Klaus Haugness- [`Github`](https://github.com/klaus2132) - [`linkedin`](https://www.linkedin.com/in/klaus-haugness)