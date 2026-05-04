import { Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();

  if (error) {
    // Handle 404 and other route errors
    const status = error?.status || 404;
    const statusText = error?.statusText || "Not Found";
    const errorMessage = error?.data || error?.message || "The page you are looking for does not exist.";

    return (
      <section className="h-screen bg-[#D5FF3F] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-2 text-[50px] font-bold text-black sm:text-[80px] md:text-[100px]">
              {status}
            </h2>
            <h4 className="mb-3 text-[22px] font-semibold text-black">
              {statusText}
            </h4>
            <p className="mb-8 text-lg text-black max-w-md mx-auto">
              {errorMessage}
            </p>
            <Link
              to="/"
              className="inline-block rounded-lg border border-black bg-transparent px-8 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </section>
    );
  } else if (error instanceof Error) {
    return (
      <section className="h-screen bg-[#D5FF3F] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-2 text-[50px] font-bold text-black sm:text-[80px] md:text-[100px]">
              {error.message || "Error"}
            </h2>
            <h4 className="mb-3 text-[22px] font-semibold text-black">
              Something went wrong
            </h4>
            <pre className="text-sm text-black max-w-lg mx-auto whitespace-pre-wrap mb-8">
              {error.stack}
            </pre>
            <Link
              to="/"
              className="inline-block rounded-lg border border-black bg-transparent px-8 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="h-screen bg-[#D5FF3F] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Unknown Error</h2>
          <Link
            to="/"
            className="inline-block mt-6 rounded-lg border border-black bg-transparent px-8 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Go To Home
          </Link>
        </div>
      </section>
    );
  }
};

export default Error;