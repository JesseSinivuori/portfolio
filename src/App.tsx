import ClickCount from './components/clickCount/clickCount';
import SomeExampleComponent from './components/example/someExampleComponent';
import MyFirstComponent from './components/myFirstComponent';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {

  return (
    <div>
      <SomeExampleComponent />
      <MyFirstComponent />
      <ClickCount />
    </div>
  )

};