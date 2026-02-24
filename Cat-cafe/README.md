# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Get list of cat cafes based on location/distance
Find mearby cat cafes
User can change radius from dropdown menu
Return list of cat cafes or msg that there isn't one
Can return
name
address
phone #
website
hours
directions
menu
Find (free) API that displays town from lat and long
Make it so that if user doesn't have a cat cafe in their search radius, it tells them there isn't one in that radius, but the closest one to them is **\*\***\_\_\_**\*\***.

Create circle for radius
filter through locations to find ones within the radius (set by user)
create a map marker for those guys
render on map

Show if there were any results
If there were, click on it and have map fly to it

Style the results list
translate meters to miles (in dropdown)
deploy it
fix the blue cloud on the map tile when it first loads

Potential future improvements:
Interact with an api to get on the fly to get cafe data
Allow for user input instead of drop-down
*Add input validations
Add user accounts
*Allow user to review cafes
*Allow user to upload pictures of cats and cafes
*Allow cafe owners to verify pictures of cats and cafes before upload

make results list is own element that renders beside the map tile instead of on top of it

Add permission to use location:

- Alert box
  - Check for alert box api in react
  - If not, create one
  - disable the rest of the page until they answer
- "Cat cafe finder is asking to know your location. Yes/no."
  - Put the text in the box.
  - Make 'yes' and 'no' run the permissions state
  - Remove permissions from the page
- If they say no, show a list of all cat cafes in North America.
  - Go to map and show entire list of cat cafes
  - No radius
  - Make sure they can interact with the list like normal
  - Make sure there are map markers for all results

* If they say yes, run as normal.
  - This is the same as usual

  Scroll results
