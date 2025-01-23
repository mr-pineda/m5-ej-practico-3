import hospLogo from "../assets/hlogo.svg";
import { SCREENS } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const sectionList = [
    { name: SCREENS.HOME, url: "/" },
    { name: SCREENS.ABOUT, url: "/about" },
    { name: SCREENS.CONTACT, url: "/contact" },
    { name: SCREENS.LOGIN, url: "/login" },
  ];

  return (
    <header className="h-15 flex flex-row justify-between bg-sky-500 px-2">
      <div className="my-2 flex flex-row items-center">
        <img src={hospLogo} className="mr-3 h-14" alt="Logo Hospital" />
        <span className="align-middle text-3xl">Nombre Hospital</span>
      </div>

      <ul className="flex flex-row items-center">
        {sectionList.map(({ name, url }, idx) => (
          <li
            key={idx}
            className="my-0 ml-3 flex h-full items-center px-3 hover:bg-sky-700"
          >
            <Link to={url} style={{ color: "white", fontSize: 22 }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
