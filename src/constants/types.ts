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
