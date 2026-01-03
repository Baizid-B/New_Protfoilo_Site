import toast from "react-hot-toast";

const Add_project = () => {

  // Submit handler
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const image = formData.get("Main_Image");
    const name = formData.get("project_name");
    const details = formData.get("text-details")
    const multiple = formData.getAll("Mult_images");

    const data = {image,name, multiple, details}

    
    try {
      const res = await fetch("http://localhost:5000/project", {
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
          result.errors.forEach(err => {
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

    } 
    // eslint-disable-next-line no-unused-vars
    catch (error) {
      toast.error("Server not responding");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center my-12">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Add New Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Main Image */}
          <div className="flex flex-col gap-1">
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

          {/* Multiple Images */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-700">
                Technology Images
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
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-700">
                Technology Images
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
