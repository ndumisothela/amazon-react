
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter}from 'react-router-dom';
import {ShoppingState} from "./Context/Shopping/ShoppingState"

ReactDOM.render(
<BrowserRouter>
    <ShoppingState>
          <App/>
    </ShoppingState>
    
</BrowserRouter>,
document.getElementById('root'));

