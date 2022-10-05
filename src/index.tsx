import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App';
import './index.css';
import {store} from "./redux/store";

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <BrowserRouter>
        <Provider store={store} >
         <App/>
        </Provider>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();