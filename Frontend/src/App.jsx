import { BrowserRouter, Routes, Route } from "react-router";
import {HomePage} from "./Pages/HomePage.jsx";
import {SearchPage} from "./Pages/SearchPage.jsx";
import {ViewPage} from "./Pages/ViewPage.jsx";
import {CartPage} from "./Pages/CartPage.jsx";
import {ProfilePage} from "./Pages/ProfilePage.jsx";
import {SignUpPage} from "./Pages/SignUpPage.jsx";
import {SignInPage} from "./Pages/SignInPage.jsx";
import {NotFoundPage} from "./Pages/NotFoundPage.jsx";
import {useAppcontext} from "./Context/Appcontext.js";

const App = () => {
  const {user, appLoading} = useAppcontext();
  if (appLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-xl">
        Loading...
      </div>
    );
  }
  const {isAuthenticated} = user;
  if(!isAuthenticated){
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/view/:id" element={<ViewPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
