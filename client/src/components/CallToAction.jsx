import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl">
          HTML, CSS, JavaScript를 더 깊이 배워볼까요?
        </h2>
        <p className="text-gray-500 my-2">
          100개의 HTML, CSS, JavaScript 프로젝트로 웹개발 기초 다지기
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://htmlcssjs-projects.paxkhan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 JavaScript Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          width="700px"
          src="https://res.cloudinary.com/dayelazrr/image/upload/v1711167792/paxkhanblog/_03bdb7be-af93-4261-8558-cdaca024f1e6_cnyweo.jpg"
        />
      </div>
    </div>
  );
}
