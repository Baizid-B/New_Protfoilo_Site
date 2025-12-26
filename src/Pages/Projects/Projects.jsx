import { useLoaderData } from "react-router";

const Projects = () => {

 const projectData = useLoaderData()

  return (
    <div className="h-screen">
      {projectData && projectData.length > 0 ? (
        <div className="grid grid-cols-3 gap-5">
          {projectData.map((users) => (
            <div className="bg-[#8B949E] p-5 rounded-2xl overflow-hidden">
              <img src={users.image} alt="" />

              <h1>{users.name}</h1>

              <p>{users.details}</p>

              {/* More Images */}
              <div>
                {users?.multiple?.map((img) => (
                  <img key={img._id} src={img} alt={img.name} />
                ))}
              </div>
            </div>
          ))}{" "}
        </div>
      ) : (
        <p className="flex justify-center items-center p-5 text-xl font-semibold font-sans w-full h-screen">
          No data avabaliable
        </p>
      )}
    </div>
  );
};

export default Projects;
