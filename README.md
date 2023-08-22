# TLG - Coding Challenge

A customer is creating a website where people who would like to see wildlife (eg lions etc) can create a list of their favourite animals.
For each animal in the system, the user would be able to rate an animal and select which attributes of the animal they like or dislike.
To get a list of attributes for different animals, you could use a website like [Animals API - API Ninjas [https://api-ninjas.com/api/animals]   
You should not write a backend for storage, but you might choose to store data in the browser cache.

## Deliverables 

### 1. Code

`npm install` - to install required packages and dependencies needed for the codebase
`npm start` - to launch website on the browser
`npm run test:jest` - to run Jest tests

### 2. Actual time taken from start to finish
3 hrs 30 mins 
- 15 mins - Designing what the website should look like and work like (general UI/UX flow)
- 45 mins - Setting up the codebase (file structuring + installing packages)
- 2 hrs - Actual implementation (UI components, API integration, tests, debugging errors, css etc)
- 30 mins - Writing up this ReadMe 

### 3. A brief description of your thought process during development, including limitations, known bugs, wishlist

I focused on separate logic from presentation layer of component, so components are created according to this scheme:

- **index.tsx** - main file with component declaration. You can put here a React Hooks features (eg.: useState, useEffects etc.), prepare component props, do some base logic etc. This file should return component view layer with component props set.
- **Component.tsx** - file with view layer of component.
- **Component.scss** - file with component style declaration.
- **handlers.ts** - file where You can place useful function for component.

### 4. Outputs
