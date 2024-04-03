import App from "./components/App";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <HomePage />
      </App>
    </BrowserRouter>
  );
}

export default Main;
