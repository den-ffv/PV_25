import { Button, Center } from "@chakra-ui/react"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "./ui/menu"

import { VscAccount } from "react-icons/vsc";
import { BiSolidUserCircle } from "react-icons/bi";
import { BiBarChartSquare } from "react-icons/bi";
import { BiBrush } from "react-icons/bi";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 5 }}>
      <div>
        <p style={{fontSize: 30, fontWeight: 'bold'}}>MYPREV</p>
      </div>
      <div>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", fontSize: 16 }}>
            <a href="/" style={{ margin: '0px 15px', display: 'flex', alignItems: 'center' }}><BiSolidUserCircle style={{marginRight: 10 }}/> My Profile</a>
            <a href="/design" style={{ margin: '0px 15px', display: 'flex', alignItems: 'center' }}><BiBarChartSquare style={{marginRight: 10 }}/> Design</a>
            <a href="/analytic" style={{ margin: '0px 15px', display: 'flex', alignItems: 'center' }}><BiBrush style={{marginRight: 10 }}/> Analytic</a>
          </ul>
        </nav>
      </div>
      <div>
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm">
              <VscAccount />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="new-file">Go out</MenuItem>
          </MenuContent>
        </MenuRoot>
      </div>
    </header>
  );
}

export default Header;
