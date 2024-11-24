import useComponentId from "../../hooks/useComponentId";
import { quickLinks } from "./links.json";

const QuickLinks = () => {
  const { nextUniqueId } = useComponentId("quick-link");
  return (
    <div className="flex flex-wrap justify-between gap-y-4 pt-8 pb-24 ">
      {quickLinks.map(({ name, url }) => (
        <a
          href={url}
          key={nextUniqueId()}
          className="flex-1 basis-1/2 md:basis-1/4 hover:underline"
        >
          {name}
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
