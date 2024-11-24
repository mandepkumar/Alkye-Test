import QuickLinks from "./quick-links";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <footer className="text-secondary bg-primary py-14 px-6 md:px-24 lg:px-48 font-bold">
      <SocialLinks />
      <QuickLinks />
      <div>
        <span className="text-gray-500">©</span> Alkye Test
      </div>
    </footer>
  );
};

export default Footer;
