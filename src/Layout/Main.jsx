import { Outlet } from "react-router";
import Nav from "../Components/Header/Nav";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <>
            <div className="bg-black text-white">
                {/* max-w-9/12 */}
                <div className=" mx-auto px-6"> 
                    <Nav></Nav>
                        <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Main;