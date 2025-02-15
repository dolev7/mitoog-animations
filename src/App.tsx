import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CustomButton from "./CustomButton";
import { gifs, playlists } from "./assets"; // Importing externalized data
import "./App.css"; // Import a CSS file for background styling

const App: React.FC = () => {
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);

  const handleClick = (gifKey: keyof typeof gifs) => {
    setSelectedGif(gifs[gifKey]);
    setSelectedPlaylist(playlists[gifKey]);
  };

  // Set background dynamically using class instead of modifying `document.body`
  useEffect(() => {
    const body = document.body;
    if (selectedGif) {
      body.classList.add("has-background");
      body.style.backgroundImage = `url(${selectedGif})`;
    } else {
      body.classList.remove("has-background");
    }

    return () => {
      body.classList.remove("has-background");
    };
  }, [selectedGif]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Box
        position="absolute"
        top={20}
        left="50%"
        sx={{
          transform: "translateX(-50%)",
          display: "flex",
          gap: 2,
        }}
      >
        <CustomButton label="The Room" onClick={() => handleClick("room")} />
        <CustomButton label="The Building" onClick={() => handleClick("building")} />
        <CustomButton label="The City" onClick={() => handleClick("city")} />
      </Box>

      {selectedPlaylist && (
        <Box
          position="absolute"
          bottom={20}
          left="50%"
          sx={{
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: 300,
            padding: "10px",
          }}
        >
          <iframe
            title="Spotify Playlist"
            style={{ borderRadius: "12px", width: "100%" }}
            src={selectedPlaylist}
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Box>
      )}
    </Box>
  );
};

export default App;
