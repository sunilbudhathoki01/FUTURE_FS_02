import React from "react";
import { Route, Routes } from "react-router";
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/Layout";
import Admindashboard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import ShoppingLayout from "./components/shopping-view/Layout";
import NotFoundpage from "./pages/not-found";
import Shoppingaccount from "./pages/shopping-view/account";
import Shoppingcheckout from "./pages/shopping-view/checkout";
import Shoppinghome from "./pages/shopping-view/home";
import Shoppinglisting from "./pages/shopping-view/listing";
import CheckAuth from "./components/common/check-auth";
import UnAuthPage from "./pages/unauth-page";
import { useSelector } from "react-redux";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* for auth */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        {/* for admin */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Admindashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
        {/* shopping  route*/}
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="account" element={<Shoppingaccount />} />
          <Route path="checkout" element={<Shoppingcheckout />} />{" "}
          <Route path="home" element={<Shoppinghome />} />{" "}
          <Route path="listing" element={<Shoppinglisting />} />
        </Route>

        {/* error pages */}
        <Route path="*" element={<NotFoundpage />} />
        <Route path="/unauth-page" element={<UnAuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
