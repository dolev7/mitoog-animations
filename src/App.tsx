import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomButton from "./CustomButton";

const gifs = {
  room: "https://media.giphy.com/media/IHkILvQZ94BxMdBHp0/giphy.gif?cid=ecf05e47zumx4y72xycqxc0yy9a3qug3bvh1a0aydn7537kt&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  building: "https://media.giphy.com/media/pX4qCZekYXTYQ/giphy.gif?cid=ecf05e4787ganyz1kmq1v32owxt8xdpwvemvtu04qkhsyui0&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  city: "https://media.giphy.com/media/GWTzcRZ5kLSGk/giphy.gif?cid=ecf05e47fj2o3wcnocqvkn49bdpmdsur5nkq602kw5zr51h5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
};

const playlists = {
  room: "https://open.spotify.com/embed/playlist/7Ez7iVYkc69khbwd4QnyRf?utm_source=generator",
  building: "https://open.spotify.com/embed/playlist/0bG0w0M8jzzzmSDcyyvODO?utm_source=generator",
  city: "https://open.spotify.com/embed/playlist/6ASp1KCZWFjZbtxepqMGHT?utm_source=generator",
};

const App: React.FC = () => {
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  const height = 300;
  const width = 300;

  const handleClick = (gifKey: keyof typeof gifs) => {
    setSelectedGif(gifs[gifKey]);
    setSelectedPlaylist(playlists[gifKey]);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <Box display="flex" gap={2} mb={4}>
        <CustomButton label="The Room" onClick={() => handleClick("room")} />
        <CustomButton label="The Building" onClick={() => handleClick("building")} />
        <CustomButton label="The City" onClick={() => handleClick("city")} />
      </Box>
      <Box width={width} height={height} display="flex" alignItems="center" justifyContent="center" border="1px solid #ccc">
        {selectedGif && <img src={selectedGif} alt="animation" width={width} height={height} />}
      </Box>
      {selectedPlaylist && (
        <Box mt={2} width="100%" maxWidth={400}>
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
