# React NASA Videos App

Creating this Videos App to have better ideas and more practice with React basics and fundamental elements

Kowalski, are you there?

## App Summary
- This NASA Videos App originally was supposed to retrieve, display and play videos searched from NASA's Images & Videos API
- I had to change this more than halfway through after finding out the the API actually does not provide videos, only video description and `srt` files
- I continued practicing writing basic React elements
- This App is quite similar to the NASA Images App
- The user can enter a search term and the screen will render a list of images & respective title from the NASA API
- What was learned:
  - Component design and application structure
  - A search form with handlers `onChange` and `onSubmit`
  - Other event handlers were used, `onTermSubmit`, `onTitleSelect` and `onClick`
  - Connecting external API(NASA Images & Videos) and request/retrieve/display data
  - Used Axios with async await to request data
  - Communicate from Child to Parent by invoking callbacks in Child Component
  - Some CSS styling, additional use of Semantic UI grid system
  - `this.setState` is used to update items(VideoList & VideoDetail) with a new search

- What this App doesn't do:
  - No user auth/id/login/etc
  - The data rendered from request doesn't actually have videos to use, I only used provided thumbnail
