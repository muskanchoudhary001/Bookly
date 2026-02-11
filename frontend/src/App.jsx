import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import EditBooks from "./pages/EditBooks";
import DeleteBooks from "./pages/DeleteBooks";
import ShowBooks from "./pages/ShowBooks";
import Landingpage from "./pages/Landingpage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import GuestHome from "./pages/GuestHomePage";
import UserHome from "./pages/UserHomePage";
import PrivateRoute from "./routes/PrivateRoute";


const App = () => {
  return (
    <Routes>

      {/* ✅ Wrap EVERYTHING inside Layout */}
      <Route element={<Layout />}>

        {/* PUBLIC */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/guest-home" element={<GuestHome />} />
        <Route path="/user-home" element={<PrivateRoute>
          <UserHome />
        </PrivateRoute>} />    
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />

        {/* BOOKS */}
        <Route path="/books" element={ <PrivateRoute>
              <Home />
         </PrivateRoute>} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<ShowBooks />} />
        <Route path="/books/edit/:id" element={<EditBooks />} />
        <Route path="/books/delete/:id" element={<DeleteBooks />} />

      </Route>

    </Routes>
  );
};

export default App;
