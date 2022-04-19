import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import './style/basic.scss';

function App() {
  const user = false;
  // const user = useSelector((state) => state.user.user.username);
  const url = window.location.pathname;
  let navigate = useNavigate();
  useEffect(() => {
    function auth() {
      if (!user) {
        return navigate("/login");
      } else {
        if (url === "/login") {
          return navigate("/");
        }
        return navigate(url);
      }
    };
    auth();
  }, [user, url]);

  return (
    <div className="App">
      {user && <Header />}
      {user
        ? (<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:err" element={<Error />} />
        </Routes>)
        : <Auth />}
    </div>
  );
}

export default App;
