import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import "./style/basic.scss";
import Dialog from "./components/Dialog/Dialog";
import { useSelector } from "react-redux";
import Confirm from "./components/Dialog/Confirm";
import Chat from "./components/Chat/Chat";
import Explore from "./components/Explore/Explore";
import User from "./components/User/User";

function App() {
  const user = true;
  const box = useSelector((state) => state.box);
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
    }
    auth();
  }, [user, url]);
  return (
    <div className="App">
      {box.boxConfirm && <Confirm overlay />}
      {box.boxNoti && <Dialog />}
      {box.boxSearch && <Dialog />}
      {box.boxUser && <Dialog />}
      {box.boxPost && <Dialog overlay times zIndex />}
      {user && <Header />}
      {user ? (
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inbox" element={<Chat />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/:user" element={<User />} />
            <Route path="/:err" element={<Error />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
