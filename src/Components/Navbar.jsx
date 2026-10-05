import './Navbar.css';
import "@gsap/react";
import StaggeredMenu from "./StaggeredMenu.jsx";


const CustomNavbar = () => {

  return (
    <>
        <StaggeredMenu
          position="right"
          items={[
            { label: "Home", link: "home", icon: "bi-house-fill"},
            { label: "About", link: "about", icon: "bi-person-fill"},
            { label: "Skills", link: "skills", icon: "bi-mortarboard-fill"},
            { label: "Projects", link: "projects", icon: "bi-box-fill"},
            { label: "Contact", link: "contact", icon: "bi-telephone-fill"}
          ]} 
          socialItems={[
            {label: "GitHub", icon: "bi-github", link: "https://github.com/RishiTheProgrammer/"},
            {label: "Instagram", icon: "bi-instagram", link: "https://www.instagram.com/theproone_345/"},
            {label: "X", icon: "bi-twitter-x", link: "https://www.instagram.com/theproone_345/"},
            {label: "Portfolio", icon: "bi-globe2", link: "https://rishitheprogrammer.vercel.app"}
          ]}
          changeMenuColorOnOpen={false}
          isFixed={true}
          displayItemNumbering={false}
          menuButtonColor='currentColor'
          openMenuButtonColor='currentColor'
          colors={["transparent", "transparent"]}
        />
    </>
  );
};

export default CustomNavbar;
