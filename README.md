# Dynamic form builder

This is an implementation of dynamic form builder in React using Class Components.

## Approach

### 1. Create DynamicFormBuilder component

-   the omponent is reusable and exposes configuration. As shown in the task description, we pass formJSON as props to this component
-   we use `react-hook-form` for extensible forms with easy-to-use validation
-   implement `onSubmit` function to process the data and console.log it in the correct format
-   we process the formJSON to receive the fields which we use later to display Field according to the settings

### 2. Create Field component

-   we use the `Field` component for every field we want to display
-   the component uses these props and return the correct field with its validation and styles
-   we use **state** to store the information if a checkbox is checked. handleOnCheckboxChange function is implemented to toggle it
-   only if we have checkbox with **id="subscribe"**, we use conditional rendering and display another **email** field when checked
-   we use Regular Expression to validate the email

### 3. Styles

-   styles are imported from a specific directory

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
