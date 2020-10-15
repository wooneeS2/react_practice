import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

 function App(){
   return(
     <HashRouter>
       {/* Link와 Router 컴포넌트는 반드시 HashRouter 안에 포함되어야함. */}
       <Navigation />
     <Route path ="/" exact={true} component={Home}/>
     <Route path="/about" component={About}/>
    <Route path="/movie-detail" component={Detail} />
  </HashRouter>
   );
 }



export default App;