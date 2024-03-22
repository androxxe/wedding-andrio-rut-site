"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineCalendar,
  AiOutlinePicture,
  AiOutlineComment,
  AiOutlineGift,
  AiOutlineCheckCircle
} from "react-icons/ai";

interface MenuProps {
  icon: JSX.Element;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const Menu = (props: MenuProps) => {
  const { icon, title, isActive, onClick } = props;

  return (
    <div>
      <button
        onClick={onClick}
        className={cn(
          "w-16 h-16 rounded-lg flex items-center justify-center flex-col transition-transform duration-200",
          isActive ? "bg-gold-200 text-maroon-600 hover:bg-maroon-200" : "text-gold-200"
        )}
      >
        {icon}
        <span className="text-xs mt-1">{title}</span>
      </button>
    </div>
  );
};

interface BottomTabProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const BottomTab = (props: BottomTabProps) => {
  const { activeIndex, setActiveIndex } = props;

  return (
    <div className="flex w-full h-20 bg-maroon-600 space-x-4 p-2 overflow-x-auto">
      <Menu
        title="Home"
        icon={<AiOutlineHome size={24} />}
        isActive={activeIndex === 0}
        onClick={() => setActiveIndex(0)}
      />
      <Menu
        title="Groom"
        icon={<AiOutlineHeart size={24} />}
        isActive={activeIndex === 1}
        onClick={() => setActiveIndex(1)}
      />
      <Menu
        title="Bride"
        icon={<AiOutlineHeart size={24} />}
        isActive={activeIndex === 2}
        onClick={() => setActiveIndex(2)}
      />
      <Menu
        title="Acara"
        icon={<AiOutlineCalendar size={24} />}
        isActive={activeIndex === 3}
        onClick={() => setActiveIndex(3)}
      />
      <Menu
        title="Galeri"
        icon={<AiOutlinePicture size={24} />}
        isActive={activeIndex === 4}
        onClick={() => setActiveIndex(4)}
      />
      <Menu
        title="Wishes"
        icon={<AiOutlineComment size={24} />}
        isActive={activeIndex === 5}
        onClick={() => setActiveIndex(5)}
      />
      <Menu
        title="Gift"
        icon={<AiOutlineGift size={24} />}
        isActive={activeIndex === 6}
        onClick={() => setActiveIndex(6)}
      />
      <Menu
        title="Closing"
        icon={<AiOutlineCheckCircle size={24} />}
        isActive={activeIndex === 7}
        onClick={() => setActiveIndex(7)}
      />
    </div>
  );
};
