// import React from 'react';
// import { Button } from 'antd'
// import 'antd/dist/antd.css'


// function App() {
//   return (
//     <div className="App">
//     <Button type="primary">Button</Button>
//   </div>
//   );
// }
// export default App;

import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Admin from './pages/admin/admin.jsx'
import Login from './pages/login/login.jsx'
export default  class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Admin}/>
      </Switch>
      </BrowserRouter>
  );
}
}
