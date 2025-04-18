"use client";
import { NavigationMenu } from "radix-ui";

import classNames from "classnames";
import { navItems } from "@/constants";
import { MenuItem } from "@/constants/types";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.css";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const ListItem = ({ data }: { data: MenuItem }) => (
    <div
      className="cursor-pointer w-full flex gap-4 p-4"
      onClick={() => router.push(data.href)}
    >
      <Image alt="icon" className="w-6" src={data.icon} />
      <div className="flex flex-col justify-start gap-0.5 text-black">
        <div className="text-base  font-600">{data.title}</div>
        <p className="text-xs">{data.subTitle}</p>
      </div>
    </div>
  );
  return (
    <NavigationMenu.Root className="max-lg:hidden w-full relative z-10">
      <NavigationMenu.List className="w-full flex items-center gap-6 xl:gap-8">
        {navItems.map((item) => (
          <NavigationMenu.Item key={item.id}>
            {item.menuItems && item.menuItems.length > 0 ? (
              <>
                <NavigationMenu.Trigger
                  className={classNames(
                    "cursor-pointer flex items-center gap-1.5  text-sm ",
                    {
                      "text-[#605c7a]": !isActive(item.href),
                      "text-black": isActive(item.href),
                    }
                  )}
                >
                  <p className="font-500"> {item.title}</p>
                  <IoIosArrowDown
                    className={`relative transition-transform duration-300 ease-in-out group-data-[state=open]:-rotate-180 group-hover:scale-110 ${styles.CarretArrow} `}
                  />
                </NavigationMenu.Trigger>

                <NavigationMenu.Content
                  className={`absolute top-0 left-0 ${styles.Content}`}
                >
                  <ul className="w-[40rem]  grid grid-cols-2 justify-center items-center p-6 gap-2">
                    {item.menuItems.map((subItem) => (
                      <ListItem key={subItem.id} data={subItem} />
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </>
            ) : (
              <NavigationMenu.Link className="" href={item.href}>
                <p
                  className={classNames("cursor-pointer font-500 text-sm ", {
                    "text-black": isActive(item.href),
                    "text-[#605c7a]": !isActive(item.href),
                  })}
                >
                  {item.title}
                </p>
              </NavigationMenu.Link>
            )}
          </NavigationMenu.Item>
        ))}

        <NavigationMenu.Indicator className={styles.Indicator}>
          <div className={styles.Arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.Viewport} />
      </div>
    </NavigationMenu.Root>
  );
};

export default Navigation;
