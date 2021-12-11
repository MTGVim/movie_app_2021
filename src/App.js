import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

const App = () =>
<HashRouter>
  <Routes>
    <Route path="/" exact={true} element={<><Navigation /><Home /></>} />
    <Route path="/about" exact={true} element={<><Navigation /><About /></>} />
    <Route path="/movie-detail" element={<><Navigation /> <Detail /></>} />
  </Routes>
</HashRouter>;

export default App;