# DevXpertise
 
# DevXpertise
## Purpose
The purpose of this application is for aspiring developers to have projects where they can earn and gain experience, while senior developers can look for side projects to add on to portfolios, explore/try out new features, and so on.

## Tools to use

- Server Runtime Env: NodeJS
- Web App Framework: ExpressJS, Express-session
- UI Library: ReactJS
- Authentication Middleware: PassportJS
- CSS Framework: Grommet
- Database Program: MongoDB
- Server: AWS
- Testing: JTest and Supertest
- HTTP Request Library: Axios
- Environment Variable Loading Module: Dotenv

## Pages
- Main Page
- Login Page 
- Account Page
- Forum Page / Post, Query

### All Pages
All pages will have a horizontal nav bar at the top that has three options:
1. "log in" if the user is not logged in. This will be replaced with "manage account" if logged in.
2. "Find requests" will redirect the user to the Forum page.
3. "Submit request" will redirect the user to "New Request" from the Forum Page.

### Main Page
Main page will just have a giant header image. It serves no purpose at the moment

### Login Page
Login page will have a single button: "Log in through google".
This is where Passportjs and Oauth2 will be used.
No other purpose at the moment.

### Account Page
This will show the profile picture, the username, and the email used to log in.

### Forum Page
This will be a long list with tabs, where it will have Search and Post at the top of the list.
There are two tabs: ongoing and archived.
Various posts will be pasted below depending on which tab you're on.

## Structure

```
my-web-app/
  ├── client/
  │   ├── public/
  │   │   ├── index.html
  │   │   └── ... (other static assets)
  │   └── src/
  │       ├── components/
  │       │   ├── Header.js
  │       │   ├── Footer.js
  │       │   └── ... (other React components)
  │       ├── pages/
  │       │   ├── Home.js
  │       │   ├── Login.js
  │       │   ├── Dashboard.js
  │       │   └── ... (other main pages)
  │       ├── App.js
  │       ├── index.js
  │       ├── App.css (or use styled-components or Grommet's theming)
  │       └── ...
  ├── server/
  │   ├── controllers/
  │   │   ├── authController.js
  │   │   └── ... (other controllers for different routes)
  │   ├── models/
  │   │   ├── User.js
  │   ├── routes/
  │   │   ├── authRoutes.js
  │   ├── config/
  │   │   ├── passport.js
  │   ├── middleware/
  │   │   ├── authMiddleware.js
  │   └── index.js
  ├── .env
  ├── package.json
  ├── package-lock.json
  └── ...
```

## Navigation
