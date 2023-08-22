# TLG - Coding Challenge

A customer is creating a website where people who would like to see wildlife (eg lions etc) can create a list of their favourite animals.
For each animal in the system, the user would be able to rate an animal and select which attributes of the animal they like or dislike.
To get a list of attributes for different animals, you could use a website like [Animals API - API Ninjas](https://api-ninjas.com/api/animals)  
You should not write a backend for storage, but you might choose to store data in the browser cache.

## Deliverables 

### 1. Code

`npm install` - to install required packages and dependencies needed for the codebase

`npm start` - to launch website on the browser

`npm run test:jest` - to run Jest tests

<br/>

### 2. Actual time taken from start to finish
3 hrs 30 mins 
- 15 mins - Designing what the website should look like and work like (general UI/UX flow)
- 45 mins - Setting up the codebase (file structuring + installing packages)
- 2 hrs - Actual implementation (UI components, API integration, tests, debugging errors, css etc)
- 30 mins - Writing up this ReadMe 

<br/>

### 3. A brief description of your thought process during development, including limitations, known bugs, wishlist

- On overall design
  - I initially thought of making a Search bar where the user enters a name and all the attributes of the animal show up for selection, but looking at existing Zoo website, a browser made more logical sense since most people wouldn't know what they are searching for
- On overall development
  - the files are structured following Atomic Design, so that atoms/molecule components are resuable and style related; organisms/templates are purely state and design related; pages are where API calls are made and data flows down
  - for data caching I used tanstack/react-query directly on top of Axios since it offers good wrappers on error handling, caching, async etc 
  - local storage functionality was used for storing which animal attributes the user likes for a particular animal, as requested in the assignment
- On limitations/bugs/TODOs
  - "TODO" comments have been included in the entire codebase for features that could not be implement due to time constraints
  - the animal info section has been hardcoded due to time constraint, therefor clicking on a new animal from the browser will not update that section
  - the page seems to reload on resize of the screen which seemed to be a tailwind bug that needs fixing 
- On wishlist
  - the Ninjas API is constrained around how it returns a response. It offers only one single query option - by name. Would be nice to have more filters/functions
  - create a homepage with "Interesting Fact of the Day" and "Animal of the day"
  - extend Filters by Popularity/Avg Rating of animals,etc dynamic filters driven by attributes returned by the API/data
  

<br/>

### 4. Outputs
A. **UI Output**
- Main sections
  - Filters - select between different types of animals to discover animals you didn't know before
    ![image](https://github.com/RuthaPrasad/tlg/assets/23292569/25d09f51-4790-42ab-b683-2d97aa53c51d)


  - Animals Browser - browse through different names and picture, quick-like option included
    ![image](https://github.com/RuthaPrasad/tlg/assets/23292569/9037ff5c-1a1f-482a-9e76-d7ce474dc53c)

    
  - Animal Info - more details about the animal you click on, user can like which characters they like about the animal
    <img src="https://github.com/RuthaPrasad/tlg/assets/23292569/35f732d9-8a9d-4bfc-9bb9-1cb3f14e62e2" width=50% height=50%>


- Full template (quick view of all main sections to help quick browsing
  ![image](https://github.com/RuthaPrasad/tlg/assets/23292569/de7c6325-7a04-4093-b305-4f23f23bd5a4)


B. **Test Output**
- Jest unit tests for one UI component and one service
  - <img src="https://github.com/RuthaPrasad/tlg/assets/23292569/1e11d9c1-9c0d-4ea0-ab09-3c76dbfc90f1.png" width=50% height=50%>






 
