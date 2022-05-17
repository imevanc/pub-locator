# SHOTSCOPE TECH TEST

This is a JS application created with Material-UI, React.js & axios.

# Table of contents
- [SHOTSCOPE TECH TEST](#shotscope-tech-test)
- [Table of contents](#table-of-contents)
- [General-Information <a name="general-information"></a>](#general-information-)
- [Tech Stack <a name="tech-stack"></a>](#tech-stack-)
- [Setup <a name="setup"></a>](#setup-)
  - [Dependencies <a name="dependencies"></a>](#dependencies-)
  - [Installation <a name="Installation"></a>](#installation-)
- [Future-Work <a name="future-work"></a>](#future-work-)

# General-Information <a name="general-information"></a>

The SHOTSCOPE TECH TEST app is my individual work on the take home test of the Shotscope. The hiring team provided me with an api link and the main purpose was to plot the locations of the pubs in Edinburgh, UK. I used uizard webpage for drafting a single-app page and wrote down state diagrams. The application was created with React.js and styled with the Material-UI framework. It is responsive and scalable; I considered both mobile and web views. If you enter into the responsive design from your browser, you can see changes on the design, as a few components are disabled when the screen resolution goes down.

The default page is the home page, where a user is logged in and they can change the mode of the webpage from light to dark. It's responsive for all users with the appropriate messages. The user can left-click on a beer marker and the will see the changes of that rendered on the pub card at the right hand side of the page. They need to right-click the same marker in order to disable the "clicked-message". The images are fetched from the Pexels API and the API coordination is done using proxy on create-react-app. 

The custom error messages are svg files stored locally, which were taken from the undraw webpage. The react-router-dom package was used in order to coordinate errocard routes, when the user types an invalid path or the data is not fetched appropriately.

# Tech Stack <a name="tech-stack"></a>

```
JavaScript
React
Material UI
CSS
HTML
```

# Setup <a name="setup"></a>

## Dependencies <a name="dependencies"></a>

<br> -> Please have a look at the list below in order to see the version of each dependency that the developer used. <-

```
- emotion/react: 11.9.0
- emotion/styled: 11.8.1
- mui/material: 5.6.3
- testing-library/jest-dom: 5.16.4
- testing-library/react: 13.1.1
- testing-library/user-event: 13.5.0
- react-google-maps/api: 2.10.2
- react-dom: 18.1.0
- react-router-dom: 6.3.0
- react-scripts: 5.0.1
- dotenv: 16.0.1
- http-proxy-middleware: 2.0.6
- react-avatar: 4.1.0
- web-vitals: 2.1.4
- axios: 0.27.2
- react: 18.1.0
- npm: 8.1.2
```
## Installation <a name="Installation"></a>

To run this project you will need to clone this repository onto your local machine.

```
$ git clone https://github.com/imevanc/shotscope-tech-test.git
```

Navigate inside the folder and install all dependencies by entering the following commands on your terminal window:

```
$ cd shotscope-tech-test
$ npm install
```

To run the application locally enter:

```
$ npm start
```

The application will run on http://localhost:3000.

# Future-Work <a name="future-work"></a>

- Hosting on Netlify or similar services.
- Type Checking: There is no type checking at the moment. My next step as a junior developer is to become acquainted with Typescript.
- Configs File: A file where will consists of configurations of the widget.
- Create user profile and sign in sign up tools.