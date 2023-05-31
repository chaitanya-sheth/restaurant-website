import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Link, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 1,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <Link color={'inherit'} href="https://www.instagram.com/"><InstagramIcon /></Link>
          <Link color={'inherit'} href="https://www.facebook.com/"><TwitterIcon /></Link>
          <Link color={'inherit'} href="https://www.github.com/"><GitHubIcon /></Link>
          <Link color={'inherit'} href="https://www.youtube.com/"><YouTubeIcon /></Link>
          
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Restro
        </Typography>
      </Box>
    </>
  );
};

export default Footer;