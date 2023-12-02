import { API_STATUS } from "./constants";
import { Navigate } from "react-router-dom";
import BooksPage from '../Pages/BooksPage'

const PrivateRoute = () => {
  return localStorage.getItem(API_STATUS) ? (
   <BooksPage />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
