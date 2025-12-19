import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import EditBooks from "./pages/EditBooks";
import DeleteBooks from "./pages/DeleteBooks";
import ShowBooks from "./pages/ShowBooks";
import Landingpage from "./pages/Landingpage";
import Loginpage from "./pages/Loginpage"
import Registerpage from './pages/Registerpage'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<ShowBooks />} />
        <Route path="/books/edit/:id" element={<EditBooks />} />
        <Route path="/books/delete/:id" element={<DeleteBooks />} />

        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />

      </Route>
    </Routes>
  );
};

export default App;
