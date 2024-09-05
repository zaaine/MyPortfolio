import React from "react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
const TbIcons = require("react-icons/tb");

export default function NavBar() {
  return (
    <div>
      <nav>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>

        <ul id="nav">
          <li className="">
            <a aria-current="page">about</a>
          </li>
          <li className="">
            <a>portfolio</a>
          </li>

          <li className="page_item page-item-11">
            <a href="https://www.adhamdannaway.com/contact">contact</a>
          </li>

          <li>
            <ul className="social">
              <li className="linkedin">
                <a href="/" title="Connect with me on Linkedin" target="_blank">
                  linkedin
                </a>
              </li>
              <li className="Medium">
                <a href="/" title="Join me on Medium" target="_blank">
                  Medium
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
