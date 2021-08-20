import { Menu } from "semantic-ui-react";
import { useRouter } from 'next/router';

export default function Gnb() {
  const router = useRouter();
  console.log(router);

  let activeItem = "home";
  if (router.pathname=== '/' ) {
    activeItem = "home";
  } else if (router.pathname === '/about') {
    activeItem = "about";
  }

  function goLink(e, data) {
    if (data.name === 'home') {
      router.push("/");
    } else if (data.name === 'about') {
      router.push("about");
    }
  }

  // semantic-ui - collections - menu - inverted
  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={goLink}
      />
      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={goLink}
      />
      <Menu.Item
        name="Contact Us"
        active={activeItem === "contact"}
        onClick={() => {
          router.push("/contact")
        }}
      />
    </Menu>
  )
}
