import {Routes, Route} from "react-router";

import MainLayout from "./layout/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (

          <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
            </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
          </Routes>

  );
}

export default App;
