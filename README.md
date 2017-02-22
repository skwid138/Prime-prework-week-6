# Prework Week 6

JavaScript can do some amazing things to our web pages! But sometimes we would rather write less code and accomplish the same things.

This is where a code library like [jQuery](http://www.jquery.com) comes in! jQuery is written in JavaScript and allows us to use its built-in functions instead of writing the longer raw  JavaScript to do things. jQuery really shines in DOM manipulation and Event handling.

Look at all the topics you covered below, impressive. I am sure by now you have seen how powerful jQuery is and are excited to get started trying it.

## Topics Cover
- File Linking / Libraries
- Document Ready
- Targeting (Element, Class, ID)
- Events - Click, Mouse In, Mouse Leave, etc.
- Animations/effects/timing
- Fade
- Slide / Animation Speeds
- $(this)
- And more!

This week's homework is broken in to three parts. The first two are smaller reviews of selectors and events. Part 3 will bring everything together to build a "memory game".

## Week 6 Assignment
As always, start off by forking and cloning this repository from Github. Open the code up in Atom to get started.

Don't forget to **keep the existing code as is** and ignore any code that is commented: `// -- DON'T TOUCH CODE BELOW --`. Also, remember `console.log()` is your friend and you can use it in conjunction with the browser console to see the output of your code as you go.

## Pt.1: Selectors
Using jQuery means first selecting an element and then doing something with it. This is DOM manipulation at its core. Because it's such a crucial piece of the puzzle, we're going to practice setting up a jQuery app and then do some DOM manipulation.

### 1A: File Linking / Set-up

You've been given an HTML page called `index.html`. Examine this closely.

1. Your first task is to source in the jquery library and the given CSS file.
2. Then source the file called `script.js` into your index file.
3. In your JavaScript file, output a console log only after the DOM is loaded. This helps you test that everything is set up correctly.

### 1B: Selectors and DOM manipulation

Now that you've got your basic app structure up and running, it's time to practice using jQuery. Write code that performs the following DOM selection and manipulation:

1. Select just the h1 inside the header element and make it disappear with the `hide()` method. 
2. Select the element with id `"step-two"` and change its background color to yellow. HINT: look up `.css()` to access an element's css properties!
3. Select the list with a class of `"example-list"` and fade it out over 1.5 seconds
  - BONUS! Wait one second and then fade it back in! HINT: look up `.delay()`!
4. Select all of the odd-numbered list items and change their text color to blue HINT: look up `.css()` to access an element's css properties!
5. Select the last list item on the page using a pseudo selector.
6. Using DOM traversal, select the last list item on the page using any of the following: `.parent()`, `.children()`, `.last()`. Change its text color to red.

## Pt.2: Event Handling, Animation, Hide/Show Elements

### Description
Burrito cat needs a navigation bar to help it hide further. Using the existing html code in `index.html` and JavaScript code in `script.js`, add the jQuery event handling code to help burrito cat fade in and out, hide and show itself and animate itself.

When a button is clicked, append to the div with id of `"clickList"` a p tag with the event. Ex: after clicking "Fade Me!" twice there should be 2 p tags in the "clickList" div that say "toggleFade".

There are in-line comments in the `script.js` explaining what should happen.

### Hard-Mode
Add a reset button to reset the changes made by the animation.

## Pt.3: Memory Game (Pro-Mode)
Inside the `assignment` folder there will be a `memory-game` folder with all the code you need to get started. The problem is described in this markdown file: [memory-game.md](assignment/memory-game/memory-game.md)
