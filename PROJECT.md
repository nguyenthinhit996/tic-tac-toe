## Project's tech stack
  ReactJS
  - A framework for easily developing SPA which offers many built-in functions such as:
    + Components: where we can group the UI designs with the logic of some specified bussiness and they can be re-used in many other places.
    + State: update and show the changes on a specific UI that don't require to re-render others.
    + JSX: A way react uses to create components.A syntax where we can easily blend in the script tags with the logic javascript code.That's why jsx is more readable and easy to use.

  React-router-dom
  - A library provides a declarative way of managing routes in React applications, thereby reducing the stress that comes from manually setting routes for all of the pages and screens in your React application.

  Jest
  - A framework to test your application with free-configuration, easy to mock data and simple to use

  Redux
  - A framework to manage states of your application.Redux puts the app's states in a separate container from your components so the states can be accessed anywhere and anytime they want.Redux can save your life when it comes to state management.
   
  Storybook
  - A library helps to showcase your components as standalone pieces where you can decouple the complex logics from that component (when the components live in the whole big app) and defining your own props, states and logics as your will so you can test those alone components in many scenerio without effecting the application. 

  Eslint
  - The pluggable linting utility for JavaScript and JSX.It helps you find and fix problems with your JavaScript code.You can configure the rules for your code to make the code look nice and readable

### Project's structure

<pre>
my-react-app/
-- node_modules/         # Node.js modules and dependencies
|-- public/              # Public assets (HTML, favicon, etc.)
|   |-- index.html       # Main HTML file
|   |-- favicon.ico      # Favicon
|   |-- ...
|-- src/                 # Source code
|   |-- components/      # React components
|   |   |-- App.js       # Main component
|   |   |-- ...
|   |-- App.css          # Styles specific to App component
|   |-- App.test.js      # Tests for App component
|   |-- index.js         # Entry point for React app
|   |-- index.css        # Global styles
|   |-- serviceWorker.js # Service worker for PWA support
|-- .gitignore           # Git ignore file
|-- package.json         # Project configuration and dependencies
|-- README.md            # Project documentation
|-- yarn.lock            # Yarn package manager lock file
</pre>

## Into details
- /public: 
  + where all the media like images are stored.

- /src/App.js
  + where the App really started

- /src/components
  + where every component that makes up the application.
  + Inside the folder includes the index file standing for the main component and a style.css file.
  + A test file to test the component separately from the whole screen.
  + a .stories.js file for developing a component independently from the whole and also used as the component for UI Unit testings.

- /src/pages
  + to which users promt to through routes. 
  + composed of components from src/components.

- /src/css
  + where all the style.css were put together in one place and imported in App.js for usage  

- /src/routes
  + where to manage the routing of the whole application.
  + react-router-dom lib comes to the picture.

- /src/utils
  + common functions implemented for reusability and constant variables

- /src/stores
  + redux reducer and store were implemented.

- /src/gameplayLoop
  + where all the functions that decide if the game comes to an end and the logic of the game.

  
  ## Project flow
    - It all starts from App.js.The default route falls into the /play or / and render the TicTacToe component
    - The TicTacToe component renders the Board component.The Board basically renders the rows along with columns with the specified number.
    ```
      const renderColumns = (row) => Array.from({ length: SETTING_GAME.Board.Columns })
          .map((_, index) => (
            <Cell
            row={row}
            column={index}
            key={`row-${row}-column-${index}`}
      />
    ));

      const renderRows = () => Array.from({ length: SETTING_GAME.Board.Rows })
          .map((_, index) => (
            <div className="board-row" key={`row-${index}`}>
            {renderColumns(index)}
      </div>
    ));
    ```
    - Every cell constructing columns and rows is mananged by Cell component

    - Every click on Cell dispatchs the update action to see which state of that Cell should be (Nought or Cross or Active or Inactive) and it also counts the turns of player for calculation purpose.
    ```
       const handleClickOnEachCell = () => {
          if (!winnerFound) {
          dispatch(updateActionCell({ row, column }));
          dispatch(updateTurnUser());
    }
  };
    ```

    - Every update on Cell shall check the current state of the game to know when a winner is found and stop the game.
    ```
    HandlWinnerActions(currentRow, currentColumn);
    ```
    
    - Bunch of logics were implemented into gameplayLoop directory