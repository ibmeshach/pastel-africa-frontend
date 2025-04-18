import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface MenuItem {
  id: number;
  title: string;
  subTitle: string;
  icon: string;
  href: string;
}

export interface NavItem {
  id: number;
  title: string;
  href: string;
  menuItems?: MenuItem[];
}

export interface TimelineFeature {
  id: number;
  title: string;
  content: string;
  path: string;
  showMore: boolean;
  image: string | StaticImageData;
}

export interface CardContentProps {
  title: string | ReactNode;
  description: string;
  icon: string | StaticImageData | null;
  titleStyle?: string;
  descriptionStyle?: string;
  iconStyle?: string;
  containerStyle?: string;
  textContainerStyle?: string;
  className?: string;
}

export interface ScaleBusinessContentCardProps {
  title: string;
  image: StaticImageData;
  description: string;
  link?: string;
}
