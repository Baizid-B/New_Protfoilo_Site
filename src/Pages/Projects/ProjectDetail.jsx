import { useLoaderData } from "react-router";

const ProjectDetail = () => {
  const Data = useLoaderData();

  console.log(Data?.name);

  return (
    <div>
      hello
      <p>{Data?._id}</p>
      <p>{Data?.name}</p>
    </div>
  );
};

export default ProjectDetail;