import React from "react";

const Artist = ({ artist }) => (
  <div className="h-16 bg-white flex shadow rounded-md hover:shadow-lg">
    <img src={artist.image} alt={artist.name} className="h-full" />
    <div className="flex flex-col justify-between p-2 overflow-hidden">
      <h1 className="overflow-ellipsis truncate text-md">{artist.name}</h1>
      <a href={`https://open.spotify.com/artist/${artist.id}`} target="_blank" className="text-xs text-green-500 italic">{'>> Escuchar en Spotify'}</a>
    </div>
  </div>
);

const Artists = ({ artists }) => (
  <div>
    <div>Se han encontrado {artists.length} artistas</div>
    <div className="grid grid-cols-2 gap-2">
      {artists.map((artist, i) => (
        <Artist key={i} artist={artist} />
      ))}
    </div>
  </div>
);

export default Artists;
