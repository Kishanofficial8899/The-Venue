import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./SideDrawer";

export default class Header extends React.Component {
  state = {
    sideDrawer: false,
    showHeader: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.setState({
          showHeader: true
        });
      } else {
        this.setState({
          showHeader: false
        });
      }
    });
  }

  toggleDrawer = (value) => {
    this.setState({
      sideDrawer: value
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.showHeader ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding1: "10px 0px"
        }}
      >
        <Toolbar
          style={{
            margin: "0 1.2rem",
            position: "relative"
          }}
        >
          <div className="header_logo">
            <div className="font-roboto header_logo_main">The Venue</div>
            <div className="header_logo_title">Musical Event</div>
          </div>
          <div className="Menu-Icon_Right">
            <IconButton
              color="inherit"
              aria-label="Menu"
              className="Menu-icon"
              onClick={() => this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <SideDrawer
              open={this.state.sideDrawer}
              onClose={(value) => this.toggleDrawer(value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
