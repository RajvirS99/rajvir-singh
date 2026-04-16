import { ChevronRight } from "lucide-react";

function OpenSourceContributions() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <ChevronRight strokeWidth={2} size={20} stroke="#3B82F6" />
        <p className="hover:underline cursor-pointer">
          fix: added server preconnect url improving the page load time
        </p>
      </div>
      <div className="flex gap-2">
        <ChevronRight strokeWidth={2} size={20} stroke="#3B82F6" />
        <p className="hover:underline cursor-pointer">
          fix: #669-ui/docs: clone component is undefined when running as a
          server
        </p>
      </div>
    </div>
  );
}

export default OpenSourceContributions;
