import { SiTypescript } from "react-icons/si";

type SidebarType = { title: string }[];

export interface SidebarItemsProps {
  onMenuClick?: () => void;
}

export const SidebarItems = (props: SidebarItemsProps) => {
  const { onMenuClick } = props;

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
        className="w-full flex items-center gap-x-2.5 py-1 text-left hover:bg-slate-800 transition-colors"
        onClick={(event) => {
          event.preventDefault();

          const element = document.getElementById(title.replace(".ts", ""));
          element?.scrollIntoView({ behavior: "smooth" });
          if (onMenuClick) onMenuClick();
        }}
      >
        <SiTypescript className="w-4 h-4 shrink-0" />
        {title}
      </button>
    </div>
  ));
};
