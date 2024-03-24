import { cn } from "@/lib/utils";
import { SiTypescript } from "react-icons/si";
import colors from "tailwindcss/colors";

type SidebarType = { title: string }[];

export interface SidebarItemsProps {
  onMenuClick?: () => void;
  menuClassName?: string;
}

export const SidebarItems = (props: SidebarItemsProps) => {
  const { onMenuClick, menuClassName } = props;

  const sidebars: SidebarType = [
    { title: "introduction.ts" },
    { title: "groom-information.ts" },
    { title: "bride-information.ts" },
    { title: "wedding-information.ts" },
    { title: "gallery.ts" },
    { title: "wishes.ts" },
    { title: "wedding-gift.ts" },
    { title: "closing-statement.ts" }
  ];

  return sidebars.map(({ title }) => (
    <div className="border-0" key={title}>
      <button
        key={title}
        className={cn(
          "w-full flex items-center gap-x-2.5 py-1 text-left hover:bg-slate-800 transition-colors",
          menuClassName
        )}
        onClick={(event) => {
          event.preventDefault();

          const element = document.getElementById(title.replace(".ts", ""));
          element?.scrollIntoView({ behavior: "smooth" });
          if (onMenuClick) onMenuClick();
        }}
      >
        <SiTypescript className="w-4 h-4 shrink-0" size={12} />
        {title}
      </button>
    </div>
  ));
};
