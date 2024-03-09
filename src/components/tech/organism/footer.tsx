import Link from "next/link";
import { BiGitBranch, BiRefresh, BiXCircle } from "react-icons/bi";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/tech/ui/tooltip";
import { IoWarningOutline, IoLogoGithub } from "react-icons/io5";

export const Footer = () => (
  <div className="text-white border-t border-t-neutral-700 flex flex-row justify-between">
    <div className="flex flex-row items-center border-r border-r-neutral-700 divide-x divide-neutral-700">
      <Link
        href="https://github.com/androxxe/wedding-andrio-rut-site"
        target="_blank"
        className="px-2 flex items-center space-x-1 text-neutral-300 hover:text-neutral-500 duration-200"
      >
        <BiGitBranch size={14} />
        <span className="text-xs font-medium">main</span>
      </Link>
      <div className="h-full w-full flex items-center justify-center px-2">
        <button className="text-neutral-300 hover:text-neutral-500 duration-200">
          <BiRefresh className="text-xl group-active:rotate-180 transition-transform" size={16} />
        </button>
      </div>
      <div className="h-full px-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="h-full">
              <div className="items-center gap-x-1 py-1 flex text-neutral-300 hover:text-neutral-500 duration-200 cursor-pointer">
                <BiXCircle size={14} />
                <p className="text-xs">0</p>
                <IoWarningOutline size={14} />
                <p className="text-xs">0</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>No problems</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
    <Link
      href="https://github.com/androxxe"
      target="_blank"
      className="flex items-center space-x-1 text-neutral-300 hover:text-neutral-500 duration-200 px-2"
    >
      <span className="text-xs font-medium">androxxe</span>
      <IoLogoGithub size={14} />
    </Link>
  </div>
);
