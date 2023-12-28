import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className="fixed start-0 top-0 z-30 w-full bg-neutral-100 md:h-auto">
      <Navbar />
    </header>
  );
};

export default Header;
