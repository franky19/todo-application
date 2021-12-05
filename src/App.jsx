import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const todo = lazy(()=>import('./component/todo'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={todo}/>
        </Switch>
      </Suspense>
    </Router>
   
  );
}

export default App;
