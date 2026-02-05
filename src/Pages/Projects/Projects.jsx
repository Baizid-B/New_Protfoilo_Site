import { useLoaderData } from "react-router";

const Projects = () => {

 const projectData = useLoaderData()

  return (
    <div className="w-11/12 mx-auto ">
      {projectData && projectData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectData.map((users) => (

            <div className="bg-[#8B949E] p-5 rounded-2xl overflow-hidden" key={users._id}>
                <div className="image-wrap">
                  <img className="rounded-xl" src={users.image} alt={users.name} />
                </div>

                    <h1 className="uppercase font-bold text-2xl font-sans my-2">{users.name}</h1>
                    <p className="capitalize font-sans px-2">{users.shortDetail}</p>

                    {/* More Images */}
                      <div className="flex flex-row gap-5 overflow-hidden my-5">
                          {
                            users?.multiple?.map(img => (
                              <img className="w-16 h-16 object-cover rounded-2xl" key={img._id} src={img} alt={img.name} />
                            ))
                          }
                      </div>

            </div>
          ))}
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
