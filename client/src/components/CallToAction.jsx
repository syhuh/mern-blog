import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl">HTML, CSS, JavaScript를 더 깊이 배워볼래?</h2>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/mern-blog-888de.appspot.com/o/postPictures%2F1711016947064-What-Is-JavaScript-Used-For.avif?alt=media&token=a6a8bc9e-0759-4ad0-bafa-4a35205e0dda" />
      </div>
    </div>
  );
}
