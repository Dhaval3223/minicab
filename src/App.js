import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import How_it_works from "./pages/how_it_works";
import Faq from "./pages/faq";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Reset_password from "./pages/reset_password";
import Job_listing from "./pages/job_listing";
import User_dashboard from "./pages/user_dashboard";
import User_subscription from "./pages/user_subscription";
import Published_job from "./pages/published_job";
import Break_down from "./pages/break_down";
import myFunction from "./jquery/common";
import Change_password from "./pages/change_password";
import Header from "./components/header";
import Footer from "./components/footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import WelcomeReg from "./pages/Welcome_Reg";
import Profile from "./pages/Profile";
import ProtectRoute from "./utils/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import SubscriptionPage from "./pages/SubscriptionDetail";
import NavigationBar from "./components/SeconNavbar";
import Claims from "./pages/Claims";
import Basket from "./pages/Basket";
import Treasury from "./pages/Treasury";
import Reports from "./pages/Reports";
import Vendor from "./pages/Vendor";
const queryClient = new QueryClient();
function App() {
  useEffect(() => {
    // Call your function or use the imported code
    myFunction();
  }, []);

  useEffect(() => {
    const sessionDuration = 10 * 60 * 1000; // 10 minutes in milliseconds
    const now = Date.now();

    // Check if Reset-password-token or Reset-password-email exist and if session is still valid
    const token = localStorage.getItem("Reset-password-token");
    const email = localStorage.getItem("Reset-password-email");
    const session = JSON.parse(localStorage.getItem("userSession"));

    if (
      token &&
      email &&
      session &&
      now - session.startTime < sessionDuration
    ) {
      console.log("Session is active");
    } else {
      const timer = setTimeout(() => {
        localStorage.removeItem("Reset-password-token");
        localStorage.removeItem("Reset-password-email");
      }, sessionDuration);

      // Clean up the timer on component unmount
      return () => clearTimeout(timer);
    }
  }, []);

  let user;
  if (localStorage.getItem("token")) {
    user = true;
  } else {
    user = false;
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          {
            user && 
          <NavigationBar />
          }
          <Routes>
            <Route element={<ProtectRoute user={user} />}>
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/user_subscription"
                element={<User_subscription />}
              />
              <Route
                path="/subscriptionDetail"
                element={<SubscriptionPage />}
              />
              <Route
                path="/claims"
                element={<Claims />}
              />
              <Route
                path="/vendors"
                element={<Vendor />}
              />
              <Route
                path="/basket"
                element={<Basket />}
              />
              <Route
                path="/treasury"
                element={<Treasury />}
              />
              <Route
                path="/reports"
                element={<Reports />}
              />
              <Route path="/job_listing" element={<Job_listing />} />
              <Route path="/" element={<Home />} />
            </Route>
              <Route path="/how_it_works" element={<How_it_works />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/user_dashboard" element={<User_dashboard />} />
             
              <Route path="/published_job" element={<Published_job />} />
              <Route path="/break_down" element={<Break_down />} />
   
            <Route path="/Welcome" element={<WelcomeReg />} />
            <Route path="/reset_password" element={<Reset_password />} />

            <Route path="/change_password" element={<Change_password />} />

            {/* register and login route */}
            <Route path="/faq" element={<Faq />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/registration"
              element={
                <ProtectRoute user={!user} redirect="/">
                  <Registration />
                </ProtectRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectRoute user={!user} redirect="/profile">
                  <Login />
                </ProtectRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
}

export default App;
