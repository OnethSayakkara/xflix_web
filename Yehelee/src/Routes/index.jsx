import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ShopYehelee from "../sections/ShopYehelee";
import PaymentForm from "../components/PaymentForm";
import Login from "../sections/Login";
import SuccessPage from "../sections/SuccessPage";
import Cart from "../components/Cart";
import { CartProvider } from "../components/CartContext";
import SignUp from "../sections/SignUp";
import TermsOfService from "../components/TermsOfService";
import PrivacyNotice from "../components/PrivacyNotice";
import ContentPartner from "../sections/ContentPartner";

const router = createBrowserRouter([  

     {
        path : "/",
        element :<App/>
     },{
        path : "terms",
        element :<TermsOfService/>

      },{
      path : "paymentform",
      element : <PaymentForm/>
   },{
      path : "login",
      element : <Login/>
   },{
      path : "signup",
      element: <SignUp/>
   },{

      path: "contentpatner",
      element: <ContentPartner/>

   },{

      path: "success",
      element: <SuccessPage/>
   },{

      path: "privacy",
      element: <PrivacyNotice/>
   }
   ,{
      path : "shop",
      element : <ShopYehelee/>,
   },{
            path : "cart",
            element :( 
            <CartProvider>
            <Cart/> 
            </CartProvider>)
         }

      
   
   




])


export default router;