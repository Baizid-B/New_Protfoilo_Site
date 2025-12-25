import { Link, useRouteError } from "react-router";


const Error = () => {

    const error = useRouteError()

    if(error){

        return(
            <>
                <section className="h-screen bg-[#D5FF3F] py-30">
                    <div className="container mx-auto">
                    <div className=" flex">
                        <div className="w-full px-4">
                        <div className="mx-auto max-w-100 text-center">
                            <h2 className="mb-2 text-[50px] font-bold leading-none text-black sm:text-[80px] md:text-[100px]">
                            {error.status}
                            </h2>
                            <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black">
                            {error.statusText}
                            </h4>
                            <p className="mb-8 text-lg text-black">
                            {error.data}
                            </p>
                            <Link to='/'
                            className="inline-block rounded-lg border border-black px-8 py-3 text-center text-base font-semibold text-black transition hover:bg-black hover:text-white"
                            >
                            Go To Home
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </>
        )
    }else if (error instanceof Error) {
        return (
            <>
                <section className="h-screen bg-[#D5FF3F] py-30">
                    <div className="container mx-auto">
                    <div className="flex">
                        <div className="w-full px-4">
                        <div className="mx-auto max-w-100 text-center">
                            <h2 className="mb-2 text-[50px] font-bold leading-none text-black sm:text-[80px] md:text-[100px]">
                            {error.message}
                            </h2>
                            <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black">
                            The stack trace is:
                            </h4>
                            <pre className=" text-md text-black">
                            {error.stack}
                            </pre>
                            <a
                            href="javascript:void(0)"
                            className="inline-block rounded-lg border border-black px-8 py-3 text-center text-base font-semibold text-black transition hover:bg-black hover:text-white"
                            >
                            Go To Home
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </>

        );
  } else {
        return <h1 className="flex justify-center items-center h-screen bg-[#D5FF3F]">Unknown Error</h1>;
  }
};

export default Error;