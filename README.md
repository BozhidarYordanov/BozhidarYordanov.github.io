# Dynamic form builder

This is an implementation of dynamic form builder Using React Hooks.

## Approach

### 1. useFetchData custom hook

-   implement a custom hook, which is simulating that is fetching the data and it lasts 3 sec

### 2. LandingPage component

-   the component renders a greeting and a button. By pressing the button, the `DynamicFormBuilder` component is rendered, whicht makes the custom hook to fetch the data and as a result we see a `Loader` component for 3 sec

### 3. Loader component

-   the component renders a loading animation, which we wee for 3 sec, while the data fetching lasts

### 4. DynamicFormBuilder component

-   once the data is fetched, the component process the data and builds a form based on it
-   we use `react-hook-form` for extensible forms with easy-to-use validation
-   implement `onSubmit` function to process the input and `console.log` it in the correct format

### 5. Field component

-   this is a reusable component, that renders all kind of fields, based ot the `props` provided
-   the component uses these `props` and return the correct field with its validation and styles
-   we use **state** to store the information if a checkbox is checked. handleOnCheckboxChange function is implemented to toggle it
-   only if we have checkbox with **id="subscribe"**, we use **conditional rendering** and display another **email** field when checked
-   we use Regular Expression to validate the email

## How to Run

### You can follow these steps:

1. Open the project folder with VS Code

2. Open the terminal

3. Navigate to **dynamic-form-builder** directory where the **package.json** file is

4. Type the following commands on the console:

    ```
    npm install
    npm run dev
    ```

    You can access the site on the port specified in the terminal

    GitHub repo: https://github.com/BozhidarYordanov/BozhidarYordanov.github.io
