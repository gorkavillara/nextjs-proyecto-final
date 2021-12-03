import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Artists from "../../components/Artists";

// const ArtistList = ({ loading, artists }) => {
//   return loading ? (
//     <div>Hola</div>
//   ) : (
//     artists.length > 0 && <div>Se han encontrado {artists.length} artistas</div>
//   );
// };

const Music = () => {
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const ArtistList = () => {
    return loading ? (
      <div className="mt-4 flex justify-center">
        {/* <div className="w-16 h-16 border-b-2 border-t-2 rounded-full border-green-500 animate-pulse"></div> */}
        <div className="w-16 h-16 border-b-2 rounded-full border-green-500 animate-spin"></div>
        {/* <FaSearch className="w-8 h-8 text-green-500 text-sm border-green-500 animate-ping" />
      <div className="w-16 h-16 border-b-2 rounded-full border-green-500 animate-bounce"></div> */}
      </div>
    ) : (
      artists.length > 0 && <Artists artists={artists} />
    );
  };

  useEffect(() => {
    const waitForSearch = setTimeout(() => {
      search !== "" ? handleSubmit() : clearArtists();
    }, 500);
    return () => clearTimeout(waitForSearch);
  }, [search]);

  const clearArtists = () => setArtists([]);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await axios.post("/api/music", { search });
    //   console.log(res.data.queryArtists);
    setLoading(false);
    setArtists(res.data.queryArtists);
  };
  return (
    <div>
      <h1>Estás en la App Musical</h1>
      <div className="buscador flex items-center gap-2 mt-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="py-1 px-2 shadow rounded outline-none focus:ring-2 ring-green-400"
        />
        <button
          disabled={search === ""}
          onClick={handleSubmit}
          className="flex items-center gap-2 bg-green-500 text-white py-1 px-2 rounded shadow focus:ring-2 ring-green-400 disabled:bg-green-200"
        >
          <FaSearch />
          <span>Buscar</span>
        </button>
      </div>
      <ArtistList />
    </div>
  );
};

export default Music;
