
const Contact = () => {
    return (
        <div className="w-11/12 mx-auto space-y-5">
            <div className="bg-[#161B22] rounded-lg">
                <h1 className="font-humane text-6xl p-5 flex flex-row justify-center">Contact</h1>
            </div>

            {/* contact form */}
            <div>
                <form className="w-1/2 space-y-5">

                    <div className="flex flex-col gap-2">
                        <label>Name</label>
                        <input className="rounded-md w-full h-10 px-3 bg-white text-black" type="text" name="First_Name" placeholder="Enter Your First Name" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Email</label>
                        <input className="rounded-md w-full h-10 px-3 bg-white text-black" type="email" name="email" placeholder="Enter Your Email" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Message</label>
                        <textarea className="rounded-md w-full min-h-50 px-3 py-3 bg-white text-black" type="textarea" name="" id="" />
                    </div>
                                        
                    <input className="btn" type="submit" value="submit" />
                </form>
            </div>

        </div>
    );
};

export default Contact;