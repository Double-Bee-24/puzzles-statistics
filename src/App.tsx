import { useState, useEffect } from "react";
import "./App.css";
import supabase from "./utils/supabase";

function App() {
  const [seasons, setSeasons] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    async function getSeasons() {
      const { data: seasons } = await supabase.from("Seasons").select();

      if (seasons && seasons.length >= 1) {
        setSeasons(seasons);
      }
    }

    getSeasons();
  }, []);

  return (
    <div>
      {seasons.map((season) => (
        <li key={season.id}>{season.name}</li>
      ))}
    </div>
  );
}

export default App;
