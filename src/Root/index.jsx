import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../Components/SignIn";
import PrivateRoute from "../Utils/PrivateRoute";
import BooksPage from "../Pages/BooksPage";

const Root = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route element={<PrivateRoute />}>
        <Route path="/books" element={<BooksPage />} />
      </Route>
    </Routes>
  );
};

export default Root;
