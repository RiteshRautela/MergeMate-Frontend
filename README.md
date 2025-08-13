# MergeMate

- Install Tailwindcss
- Component library --> DaisyUI (npm i -D daisyui@latest) and @plugin "daisyui";in index.css
- Add Navbar component to App.jsx
- install react router --> npm install react-router-dom
- created BrowserRouter -> inside it we have -> Routes --> <Route />
- parent Route -->   <Route path="/" element={<Body/> } > childern route or body </Route>
- created <outlet/> in body to render each children Route of <Body>
- add <Footer/> component inside Body , used fixed bottom-0 to stick it to the end 
----------------------------------------------------------------------------------------------
ui16
- Create a Login component --> Card which have email , password , button etc 
- to make an api call we use an NPM package called ---> AXIOUS (npm install axios)
- CorS - install cors in backend -> add Middleware to app with config -> origin , cerendentials
-  whenever you are making an api call using axios so pass { withCredentials: true}
- install react-redux-toolkit --> npm install @reduxjs/toolkit
-  configurestore ==> add a provider to app.js ==> create slice and export things ==> add reducer to store 
- add data to reduxstore by dispatch an action (by using useDispatch() hook given by react redux )

- there is a redux tool kit extension --> redux dev tool for chrome but for firefox search in google 
- subscribe to the store using useSelector((store)=>store.user). in Navbar component 
- when user log in redirect user to feed import {useNavigate} from "react-router-dom" 

- Refactor our code to add const file 