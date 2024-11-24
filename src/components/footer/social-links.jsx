import useComponentId from "../../hooks/useComponentId";
import { socialMediaLinks } from "./links.json";

const SocialLinks = () => {
  const { nextUniqueId } = useComponentId("social-link");
  return (
    <div className="flex flex-row gap-4 md:gap-12 py-2">
      {socialMediaLinks.map(({ name, href, imgSrc }) => (
        <div key={nextUniqueId()}>
          <a href={href}>
            <img
              src={imgSrc}
              alt={name}
              className="w-8 h-8 md:w-10 md:h-10 hover:scale-125 transform transition-all duration-300 ease-in-out"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
