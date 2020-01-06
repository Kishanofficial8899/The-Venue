import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import { scroller } from "react-scroll";

const SideDrawer = (Props) => {
  const ScrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    Props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={Props.open}
      onClose={() => Props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => ScrollToElement("Featured")}>
          Event Start in
        </ListItem>
        <ListItem button onClick={() => ScrollToElement("VenueInfo")}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => ScrollToElement("Highlight")}>
          Highlight
        </ListItem>
        <ListItem button onClick={() => ScrollToElement("Location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
