# MergeMate

- Install Tailwindcss
- Component library --> DaisyUI (npm i -D daisyui@latest) and @plugin "daisyui";in index.css
- Add Navbar component to App.jsx
- install react router --> npm install react-router-dom
- created BrowserRouter -> inside it we have -> Routes --> <Route />
- parent Route -->   <Route path="/" element={<Body/> } > childern route or body </Route>
- created <outlet/> in body to render each children Route of <Body>
- add <Footer/> component inside Body , used fixed bottom-0 to stick it to the end 