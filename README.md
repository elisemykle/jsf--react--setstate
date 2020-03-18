# Task

Update the ButtonCounter component, so that when the button is clicked the counter is incremented.

## Example

[The example is here](https://jsf-react-setstate.now.sh).

# Project Setup

**Fork** this repository into your account and then **clone** that repositroy onto your machine.

Once cloned on your machine:
1. Go to the folder in your **terminal/command line** and run `npm install`.
2. **Open** the project in your **code editor**.
3. To **run the website,** go to the folder in your **terminal/command line** and run `npm start`.

## Task Steps

### Without setState/useState

1. Look in ButtonCounter.js.
2. You will see example code of how someone might **naively** implmented the counter - this code does not **not** work as expected.
3. look into the console and you will see the counter does get incremented
4. **BUT** without using useState/setState, the HTML will never be re-rendered, so it will remain at 0 in the page.
5. We will update the code to use useState/setState to get the HTML to work.
6. You can also see this because the date/time at the bottom of the component never updates.

### With setState/useState

#### useState

1. Import add `useState` from `'react'`. `React` is the default import and `useState` is an additional import, so it must be separated from `React` with a comma and then wrpped in `{}`.
2. Add the start of the `ButtonCounter` component function, we will set up our state.
3. We will be calling the `useState()` function.  `useState()` will return an array containing 2 things we need.  We will use array deconsutrction to retrieve them from the array.  The 2 things are the `state`, and the `setState()` function - so this is what we will name our variables. The code should look like this:
   ```
   const [state, setState] = useState();
   ```
4. The last thing we need to do is set an initial state.  This is the value `state` will be set to, before we update the state when using the `setState` function.  Our initial state will be to set the number of clicks to `0`.  The code should now look like this:
   ```
   const [state, setState] = useState({ numberOfClicks: 0 });
   ```
5. When we update the state, we will make sure the object is the same structure as before, just with update data.  So the only thing that should change is the number that `numberOfClicks` is set to.

#### using the state

1. Our number of clicks is now stored in the `state` variable, so we need to update the JSX code that outputs the number to use the state object.
2. The paragraph tag should now look like this:
   ```
   <p>Number of clicks: {state.numberOfClicks}</p>
   ```

#### setState

1. The last thing we need to do is use the setState function to change the state, and to re-render the component.
2. Inside the `handleClick` event handler function, call setState and pass in what the new state should be.  The new state should be the same as the old state, but with numberOfClicks incremented by 1.  The code should look like this:
   ```
   setState({ numberOfClicks: state.numberOfClicks + 1 });
   ```
3. The new state will be the same as the old state, but with numberOfClicks increased by 1.
4. When the button is clicked the setState code will run, which will tried the component to re-render with the new state.
5. You can see that when you the component re-renders the update date/time will be shown at the bottom.