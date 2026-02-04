import toast from "react-hot-toast";

const Add_project = () => {
  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const image = formData.get("Main_Image");
    const name = formData.get("project_name");
    const details = formData.get("text-details");
    const multiple = formData.getAll("Mult_images");
    const project_view_link = formData.get("project_view_link");
    const short = formData.get("short-details")

    const data = { image, name, multiple, details, project_view_link,short };
    console.log(data);
    

    try {
      const res = await fetch("https://protfoilo-backend.vercel.app/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      // ❌ Validation / rate limit / server error
      if (!res.ok) {
        if (result.errors) {
          result.errors.forEach((err) => {
            toast.error(err.msg);
          });
        } else if (result.message) {
          toast.error(result.message);
        } else {
          toast.error("Something went wrong");
        }
        return;
      }

      // ✅ Success
      if (result.insertedId) {
        toast.success("Project added successfully!");
        e.target.reset();
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // eslint-disable-next-line no-unused-vars
      toast.error("Server not responding");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Add New Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Project Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Project Name
            </label>
            <input
              type="text"
              name="project_name"
              placeholder="Enter project name*"
              className="border text-black border-gray-300 rounded-md px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>


          {/* Main Image */}
          <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Project Image
                </label>
                <input
                  type="text"
                  name="Main_Image"
                  placeholder="must be a valid url*"
                  className="file:mr-4 file:py-2 file:px-4
                            text-black
                            border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Project viwe link */}
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Project View Link
                </label>
                <input
                  type="text"
                  name="project_view_link"
                  placeholder="Enter project link*"
                  className="border text-black border-gray-300 rounded-md px-3 py-2
                            focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
          </div>

          {/* Project short Details */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-gray-700">
              Project Short Details
            </label>

            <textarea
              name="short-details"
              placeholder="Enter project details*"
              className="border text-black border-gray-300 rounded-md px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>


          {/* Multiple Images */}
          <div className="grid grid-cols-2 gap-5">

            {/* Image_link_1*/}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-700">
                Technology Images-1
              </label>
              <input
                type="text"
                name="Mult_images"
                placeholder="must be a valid url*"
                className="border border-gray-300 rounded-md p-2 bg-white
                          text-black
                          file:rounded-md"
              />
            </div>

            {/* Image_link_2*/}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-700">
                Technology Images-2
              </label>
              <input
                type="text"
                name="Mult_images"
                placeholder="must be a valid url*"
                className="border border-gray-300 rounded-md p-2 bg-white
                          text-black
                          file:rounded-md"
              />
            </div>

            {/* Image_link_3*/}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-700">
                Technology Images-3
              </label>
              <input
                type="text"
                name="Mult_images"
                placeholder="must be a valid url*"
                className="border border-gray-300 rounded-md p-2 bg-white
                          text-black
                          file:rounded-md"
              />
            </div>

            {/* Image_link_4*/}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-700">
                Technology Images-4
              </label>
              <input
                type="text"
                name="Mult_images"
                placeholder="must be a valid url*"
                className="border border-gray-300 rounded-md p-2 bg-white
                          text-black
                          file:rounded-md"
              />
            </div>

            {/* Image_link_5*/}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-700">
                Technology Images-5
              </label>
              <input
                type="text"
                name="Mult_images"
                placeholder="must be a valid url*"
                className="border border-gray-300 rounded-md p-2 bg-white
                          text-black
                          file:rounded-md"
              />
            </div>

            {/* Image_link_6*/}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-700">
                Technology Images-6
              </label>
              <input
                type="text"
                name="Mult_images"
                placeholder="must be a valid url*"
                className="border border-gray-300 rounded-md p-2 bg-white
                          text-black
                          file:rounded-md"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-gray-700">
              Project Details
            </label>

            <textarea
              name="text-details"
              placeholder="Enter project details*"
              className="border text-black border-gray-300 rounded-md px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>



          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-[#D5FF3F] text-black py-2 rounded-md"
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_project;

