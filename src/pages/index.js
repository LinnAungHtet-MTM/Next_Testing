import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Header from "@/layouts/header";
import RenderContent from "@/layouts/nav";
import AddIcon from "@mui/icons-material/Add";
import { Button, Chip, Grid, Menu, MenuItem, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import EmailIcon from "@mui/icons-material/Email";
import DeleteIcon from "@mui/icons-material/Delete";
import PhoneIcon from "@mui/icons-material/Phone";
import PasswordIcon from "@mui/icons-material/Password";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { fontWeight } from "@mui/system";
import CardBtn from "@/components/button/CardBtn";

const MainDashboard = (props) => {
  const drawerWidth = 280;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* top bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          backgroundColor: "milky.base",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "background.base" }}
          >
            <MenuIcon />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
      {/* side bar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          PaperProps={{
            sx: {
              bgcolor: "background.base",
            },
          }}
        >
          <RenderContent />
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
          PaperProps={{
            sx: {
              bgcolor: "bgColor.main",
            },
          }}
        >
          <RenderContent />
        </Drawer>
      </Box>
      {/* dashboard content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
          backgroundColor: (theme) => `${theme.palette.milky["500"]}`,
        }}
      >
        <Toolbar />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">Employees</Typography>
          <Button sx={{ borderRadius: "25px" }} variant="contained">
            {" "}
            <AddIcon /> New Employee
          </Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Card
              sx={{ maxWidth: 320, borderRadius: "25px", marginTop: "30px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "5px 5px 0",
                }}
              >
                <IconButton>
                  <MoreVertIcon onClick={handleMenu} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem sx={{ fontSize: "15px" }} onClick={handleClose}>
                    Delete
                  </MenuItem>
                  <MenuItem sx={{ fontSize: "15px" }} onClick={handleClose}>
                    change Password
                  </MenuItem>
                </Menu>
              </div>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  margin: "0 auto",
                }}
                alt="img"
                src="auth/login.png"
              />
              <Box mt={1} sx={{ textAlign: "center" }}>
                <Typography>Linn Aung Htet</Typography>
                <Typography sx={{ fontSize: "15px" }}>Admin</Typography>
                <Chip
                  sx={{
                    padding: "0px 20px",
                    borderRadius: "20px",
                    // fontWeight: (theme) => `${theme.palette.fontWeights.bold}`,
                    color: "tag.base",
                    backgroundColor: (theme) => `${theme.palette.tag["50"]}`,
                  }}
                  label="Verified"
                  color="primary"
                />
              </Box>
              <CardContent>
                <Stack
                  sx={{
                    borderRadius: "15px",
                    padding: "15px",
                    marginBottom: "10px",
                    backgroundColor: (theme) => `${theme.palette.milky["600"]}`,
                  }}
                  spacing={1}
                >
                  <Typography
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <EmailIcon sx={{ marginRight: "5px", fontSize: "20px" }} />{" "}
                    mtm.linnaunghtet@gmail.com
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <PhoneIcon
                      style={{ fontSize: "20px", marginRight: "5px" }}
                    />{" "}
                    09773772590
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    borderRadius: "15px",
                    padding: "15px",
                    backgroundColor: (theme) => `${theme.palette.milky["600"]}`,
                  }}
                  spacing={1}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14px",
                    }}
                  >
                    <p>Date of Birth</p>
                    <p>23 March,2000</p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14px",
                    }}
                  >
                    <p>Applied on</p>
                    <p>23 March,2000</p>
                  </Box>
                </Stack>
                <Box
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  mt={2}
                >
                  <CardBtn cardBtnText={"Edit"} />
                  <CardBtn cardBtnText={"View"} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

MainDashboard.propTypes = {
  window: PropTypes.func,
};

export default MainDashboard;
