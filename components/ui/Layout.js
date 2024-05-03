import { SessionProvider } from "next-auth/react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }){
    return (

            <div>
            {children}
            <Footer />
        </div>
    )
} export default Layout;