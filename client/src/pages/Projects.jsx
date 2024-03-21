import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="max-w-2xl min-h-screen flex flex-col justify-center items-center mx-auto gap-6 p-3">
      <h1 className="text-3xl font-semibold text-center my-7">Projects</h1>
      <p className="text-md text-gray-500">
        HTML, CSS, JavaScript를 배우면서 재미있고 매력적인 프로젝트를
        만들어보자!
      </p>
      <CallToAction />
    </div>
  );
}
