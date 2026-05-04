import { Outlet, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../Components/Header/Nav";
import Footer from "../Components/Footer/Footer";
import Loading from "../Components/Loading";

const Main = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;

    if (isLoading) {
      timer = setTimeout(() => setShow(true), 50);
    } else {
      // delay hide
      timer = setTimeout(() => setShow(false), 300);
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      {show && <Loading />}

      <div className="bg-black text-white">
        <div className="mx-auto px-2 md:px-6">
          <Nav />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;