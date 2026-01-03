import contect_img from "../../assets/contact_page_image/contact_page_image.jpg";

const Contact = () => {
    return (
        <div className="w-11/12 mx-auto space-y-5 min-h-screen bg-cover bg-center rounded-2xl " style={{backgroundImage:`url(${contect_img})`}}>
            <div className="bg-[#161B22] rounded-lg">
                <h1 className="font-humane text-6xl p-5 flex flex-row justify-center">Contact</h1>
            </div>

            {/* contact form */}
            <div className="flex justify-center">
                <form className="w-1/2 space-y-5 py-20">

                    <div className="flex flex-col gap-2">
                        <label>Name</label>
                        <input className="border focus:border-[#d5ff3f] focus:outline-none transition duration-300 rounded-md w-full h-16 px-3 bg-gray-100 text-black" type="text" name="First_Name" placeholder="Enter Your First Name" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Email</label>
                        <input className="border focus:border-[#d5ff3f] focus:outline-none transition duration-300 rounded-md w-full h-16 px-3 bg-gray-100 text-black" type="email" name="email" placeholder="Enter Your Email" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Message</label>
                        <textarea className="border focus:border-[#d5ff3f] focus:outline-none transition duration-300 rounded-md w-full min-h-50 px-3 py-3 bg-gray-100 text-black" type="textarea" name="" placeholder="Enter Your Message"/>
                    </div>
                                        
                    <input className="btn w-full text-lg uppercase bg-white h-12" type="submit" value="submit" />
                </form>
            </div>

        </div>
    );
};

export default Contact;