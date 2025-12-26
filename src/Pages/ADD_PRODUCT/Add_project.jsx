
const Add_project = () => {

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const image = formData.get("Main_Image");
    const name = formData.get("project_name");
    const details = formData.get("text-details")
    const multiple = formData.getAll("Mult_images");

    const data = {image,name, multiple, details}

    console.log("all data:", data);

    e.target.reset()

    fetch("http://localhost:5000/project",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    })

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
              className="file:mr-4 file:py-2 file:px-4
                        text-black
                        border border-gray-300 rounded-md p-2"
              required
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
              placeholder="Enter project name"
              className="border text-black border-gray-300 rounded-md px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-black"
              required
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
                className="border cursor-pointer border-gray-300 rounded-md p-2 bg-white
                          text-black
                          file:rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-700">
                Technology Images
              </label>
              <input
                type="text"
                name="Mult_images"
                className="border cursor-pointer border-gray-300 rounded-md p-2 bg-white
                          text-black
                          file:rounded-md"
                required
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
                placeholder="Enter project details"
                className="border text-black border-gray-300 rounded-md px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-black"
                required
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
