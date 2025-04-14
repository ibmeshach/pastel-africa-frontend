import icons from "@/public/icons";
import { NavItem } from "./types";

export const navItems: NavItem[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Product",
    href: "#",
    menuItems: [
      {
        id: 2.1,
        title: "Editor",
        subTitle: "Effective Visual Builder",
        icon: icons.products.editor,
        href: "#",
      },

      {
        id: 2.2,
        title: "Interaction & Animation",
        subTitle: "Design Interactive Websites",
        icon: icons.products.animation,
        href: "#",
      },

      {
        id: 2.3,
        title: "Grids & Layouts",
        subTitle: "Structure more easily",
        icon: icons.products.grids,
        href: "#",
      },

      {
        id: 2.4,
        title: "Media Manager",
        subTitle: "Manage & edit site assets",
        icon: icons.products.media,
        href: "#",
      },

      {
        id: 2.5,
        title: "Typography",
        subTitle: "Customize your branding",
        icon: icons.products.typography,
        href: "#",
      },

      {
        id: 2.6,
        title: "SEO",
        subTitle: "Optimize your SEO workflow",
        icon: icons.products.seo,
        href: "#",
      },

      {
        id: 2.7,
        title: "Form Builder",
        subTitle: "Design any web forms",
        icon: icons.products.form,
        href: "#",
      },

      {
        id: 2.8,
        title: "Accessibility",
        subTitle: "Accessible to everyone",
        icon: icons.products.accessibility,
        href: "#",
      },

      {
        id: 2.9,
        title: "Pop-up Builder",
        subTitle: "Build pop-up visually",
        icon: icons.products.popUp,
        href: "#",
      },

      {
        id: 2.1,
        title: "Figma to Droip",
        subTitle: "Turn static designs into live websites",
        icon: icons.products.figma,
        href: "#",
      },

      {
        id: 2.11,
        title: "Content Manager",
        subTitle: "Centralize dynamic content management",
        icon: icons.products.content,
        href: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Resources",
    href: "#",
    menuItems: [
      {
        id: 3.1,
        title: "Droip Blogs",
        subTitle: "Explore what's happening",
        icon: icons.resources.blogs,
        href: "#",
      },

      {
        id: 3.2,
        title: "Documentation",
        subTitle: "Learn from documentation",
        icon: icons.resources.documentation,
        href: "#",
      },

      {
        id: 3.3,
        title: "Release Notes",
        subTitle: "Check what's new",
        icon: icons.resources.notes,
        href: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Support",
    href: "#",
    menuItems: [
      {
        id: 4.1,
        title: "Get Support",
        subTitle: "Fix your issues with our experts",
        icon: icons.supportItems.support,
        href: "#",
      },

      {
        id: 4.2,
        title: "Feature Request",
        subTitle: "Let us know what's missing",
        icon: icons.supportItems.feature,
        href: "#",
      },

      {
        id: 4.3,
        title: "Contact",
        subTitle: "Contact for query",
        icon: icons.supportItems.contact,
        href: "#",
      },
    ],
  },
  {
    id: 5,
    title: "Pricing",
    href: "#",
  },
];

export const footerLinks = [
  {
    title: "Product",
    links: [
      {
        title: "Grid & Layouts",
        href: "#",
      },
      {
        title: "Typography",
        href: "#",
      },
      {
        title: "Media Manager",
        href: "#",
      },
      {
        title: "Form Builder",
        href: "#",
      },
      {
        title: "Figma",
        href: "#",
      },
      {
        title: "Pop-Up Builder",
        href: "#",
      },
      {
        title: "Interaction & Animations",
        href: "#",
      },
      {
        title: "Accessibility",
        href: "#",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        title: "Affiliates",
        href: "#",
      },
      {
        title: "Terms & Privacy",
        href: "#",
      },
      {
        title: "Cookie",
        href: "#",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Documentation",
        href: "#",
      },
      {
        title: "Release Notes",
        href: "#",
      },
    ],
  },

  {
    title: "Support",
    links: [
      {
        title: "Pricing",
        href: "#",
      },

      {
        title: "Contact Us",
        href: "#",
      },
    ],
  },
];
