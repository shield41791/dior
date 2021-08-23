import { Menu } from "semantic-ui-react";
import { useRouter } from 'next/router';

export default function Gnb() {
  const router = useRouter();
  //console.log(router);

  let activeItem = "home";
  if (router.pathname === '/') {
    activeItem = "home";
  } else if (router.pathname === '/about') {
    activeItem = "about";
  } else if (router.pathname === '/contact') {
    activeItem = "contact";
  } else if (router.pathname === '/admin') {
    activeItem = "admin";
  }

  function goLink(e, data) {
    if (data.name === 'Home') {
      router.push("/");
    } else if (data.name === 'About') {
      router.push("about");
    } else if (data.name === 'Contact Us') {
      router.push("contact");
    } else if (data.name === 'Admin') {
      router.push("admin");
    }
  }

  // semantic-ui - collections - menu - inverted
  return (
    <Menu inverted>
      <Menu.Item
        name='Home'
        active={activeItem === 'home'}
        onClick={goLink}
      />
      <Menu.Item
        name='About'
        active={activeItem === 'about'}
        onClick={goLink}
      />
      <Menu.Item
        name="Contact Us"
        active={activeItem === "contact"}
        onClick={goLink}
      />
      <Menu.Item
        name="Admin"
        active={activeItem === "admin"}
        onClick={goLink}
      />
    </Menu >
  )
}
