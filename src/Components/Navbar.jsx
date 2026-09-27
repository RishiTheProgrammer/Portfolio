import './Navbar.css';
import "@gsap/react";
import StaggeredMenu from "./StaggeredMenu.jsx";


const CustomNavbar = () => {

  return (
    <>
        <StaggeredMenu
          position="right"
          items={[
            { label: "Home", link: "/" },
            { label: "About", link: "/about" },
            { label: "Skills", link: "/skills" },
            { label: "Projects", link: "/projects" },
            { label: "Contact", link: "/contact" }
          ]} 
          socialItems={[
            {label: "GitHub", link: "https://github.com/RishiTheProgrammer/"},
            {label: "Instagram", link: "https://www.instagram.com/theproone_345/"},
            {label: "Potfolio", link: "https://rishitheprogrammer.vercel.app"}
          ]}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#1a1a1a"
          changeMenuColorOnOpen={true}
        />
      </div>
    </>
    </>
  );
};

export default CustomNavbar;
