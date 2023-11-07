# Guardian News App

The project is hosted on Netlify. To view the project, click [here](https://proiect-news-nm.netlify.app/).

## Table of Contents
- [Screenshots](#screenshots)
- [Introduction](#introduction)
- [Functionality and Operation](#functionality-and-operation)
- [Technologies](#technologies)
- [Key Takeaways](#key-takeaways)
- [Handy Resources](#handy-resources)
- [Gratitude](#gratitude)

## Screenshots
| Smartphone screen | Tablet screen | Desktop screen |
|----------|----------|----------|
| ![Smartphone](https://github.com/nymts/proiect-news-nm/assets/134009663/5f1187f6-4fa1-42be-b958-37ed33dfaca8) | ![Tablet](https://github.com/nymts/proiect-news-nm/assets/134009663/2483f9a9-7be6-4bf2-8904-188a7ead227b) | ![Desktop](https://github.com/nymts/proiect-news-nm/assets/134009663/f64a48ca-9432-4335-b9b6-932e95281e9f) |

## Introduction
The Guardian News App is a web application that utilizes the [Guardian API](https://open-platform.theguardian.com/documentation/) to extract current and continuously updating news headlines, images, and text content. It also retrieves formatting information related to detailed news articles via the API. The app processes the news obtained through the API, categorizing them into different sections such as tech, football, and fashion. Furthermore, users can click on news articles to view their details, including images, links, and videos. Additionally, users can add news articles to their "Favorites" category or remove them with the appropriate button. Clicking on the logo will take users to the Home page. The website remembers users' favorite articles using Local Storage. Key factors used in the development of this project include the following: Guardian API, React Router, Hooks (useFetch(), useParams(), useSearchParams()), and Local Storage.

## Technologies
- HTML5
- CSS
- Bootstrap 5
- JavaScript (ES6)
- JSON
- APIs
- Netlify
- Git / GitHub
- React

## Key Takeaways
- Building a Single Page Application (SPA) in VS Code by leveraging Node.js, npm, and React libraries for an interactive user experience.
- Crafting a responsive design that adapts seamlessly to desktops, tablets, and mobile screens using the power of React Bootstrap.
- Streamlining the codebase by using JSX code modules for components and pages, enhancing code readability and easing debugging processes.
- Enhancing code maintainability through the implementation of CSS modules that correspond to different components and pages.
- Mastering the art of real-time data retrieval from APIs, including handling API keys, using Postman for API testing, and employing React hooks like useFetch() and useEffect().
- Dynamically presenting news articles across distinct categories on their respective pages, enabling users to stay updated on a wide range of topics.
- Establishing robust routing for the project with the aid of React Router, ensuring smooth navigation throughout the application.
- Empowering users with the capability to manage their favorite news articles, allowing them to add or remove articles effortlessly by harnessing the potential of useContext(), useReducer(), and actions.
- Achieving data persistence, even after refreshing the web browser, thanks to the effective use of the useLocalStorage() hook.
- Deploying the project on Netlify, skillfully utilizing Node.js and npm for hosting the application, making it accessible to a global audience.
- Mastering the art of Markdown language, culminating in the creation of a meticulously structured README.md document that encapsulates the project's essence and technical details.

## Handy Resources
I found the following resources helpful during this project:
- IT School mentorship and Web Development course.
- Guardian API documentation.

## Gratitude
I would like to express my gratitude to:
- IT School for providing valuable guidance and education.
- Mentor: Rosian Mihai for mentorship and support throughout the course.
