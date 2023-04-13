import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { useState } from "react";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Roboto_Mono } from "@next/font/google";
import Link from "next/link";

const roboto = Roboto_Mono({
  subsets: ["latin"],
});

interface Props {}

type Anchor = "top" | "left" | "bottom" | "right";

const HamburgerDrawer: React.FC<Props> = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ font: "arial" }}
      className={roboto.className}
    >
      <List
        style={{
          padding: "10px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Link href={'/'}>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <p style={{ fontWeight: "bold" }}>Home</p>
          </ListItem>
        </Link>
        <Divider />
        <Link href={"/#projects"}>
          <ListItem>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <p style={{ fontWeight: "bold" }}>Projects</p>
          </ListItem>
        </Link>
        <Divider />
        <Link href={'/contact'}>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <p style={{ fontWeight: "bold" }}>Contact</p>
        </ListItem>
        </Link>
        <Link href={'/julius_cv_short.pdf'} target='_blank'>
        <ListItem>
          <ListItemIcon>
            <WorkHistoryIcon />
          </ListItemIcon>
          <p style={{ fontWeight: "bold" }}>Resumé</p>
        </ListItem>
        </Link>
        
      </List>
    </Box>
  );

  return (
    <>
      <div>
        <React.Fragment>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
      </div>
      <MenuIcon
        style={{ cursor: "pointer" }}
        fontSize="medium"
        onClick={toggleDrawer("right", true)}
      />
    </>
  );
};

export default HamburgerDrawer;
