import Image from "next/image";
import rajvirSingh from "../assets/1000050935-01.jpeg";
import TabsContainer from "./components/Tabs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Github from "../assets/Github";
import Linkedin from "../assets/Linkedin";
import Youtube from "../assets/Youtube";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-10 flex flex-col gap-12 px-4">
      <Header />
      <div className="flex flex-col gap-6 text-center">
        <Image
          src={rajvirSingh}
          alt="rajvir-singh"
          width={96}
          className="rounded-xl mx-auto"
        />
        <div>
          <h3 className="font-bold text-xl">Rajvir Singh</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Frontend Software Engineers
          </p>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Hi, I am a frontend software engineer from Punjab, India. I love to
          build web applications in JavaScript. I like to contribute to open
          source, and share insights on YouTube.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/RajvirS99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github width={20} height={20} fill="currentColor" />
          </a>
          <a
            href="https://www.linkedin.com/in/iamrajvir/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Linkedin width={20} height={20} />
          </a>
          <a
            href="https://www.youtube.com/@irajvirsingh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Youtube width={20} height={20} fill="currentColor" />
          </a>
        </div>
      </div>
      <TabsContainer />
      <Footer />
    </div>
  );
}
