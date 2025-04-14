import { footerLinks } from "@/constants";
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

const socials = [
  {
    title: "Facebook",
    icon: <FaFacebook />,
  },
  {
    title: "Twitter",
    icon: <FaXTwitter />,
  },
  {
    title: "Linkedin",
    icon: <FaLinkedin />,
  },
  {
    title: "Youtube",
    icon: <FaYoutube />,
  },
];

const Footer = () => {
  return (
    <div className="w-full">
      <div className="container flex max-md:flex-col-reverse items-start py-20 gap-12 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-48">
        <div className="flex md:flex-col max-md:items-center gap-6">
          <h2 className="text-base text-black font-600">Social</h2>
          <div className="flex md:flex-col gap-2 max-md:items-center text-[#605C7A]">
            {socials.map((item) => (
              <div
                key={item.title}
                className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:bg-white"
                style={{
                  width: "32px",
                  height: "32px",
                }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-12 ">
          {footerLinks.map((item) => (
            <div key={item.title} className="flex flex-col gap-5">
              <h2 className="text-base text-black font-600">{item.title}</h2>
              <ul className="flex flex-col gap-2">
                {item.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-sm text-[#605C7A] hover:text-black"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
