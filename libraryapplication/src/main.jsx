import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { BooksProvider } from './BooksContext';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <StrictMode>
       <BooksProvider>
        <App />
       </BooksProvider>
    </StrictMode>,
  </BrowserRouter>

)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
