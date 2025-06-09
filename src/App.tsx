import { useState, useEffect } from "react";
import "./App.css";
import supabase from "./utils/supabase";
import Table from "./components/common/Table/Table";

function App() {
  const [seasons, setSeasons] = useState<
    { id: number; created_at: Date; name: string }[]
  >([]);

  useEffect(() => {
    async function getSeasons() {
      const { data: seasons } = await supabase.from("Seasons").select();

      if (seasons && seasons.length > 0) {
        setSeasons(seasons);
      }
    }

    getSeasons();
  }, []);

  return (
    <div>
      <Table tableName="Seasons" tableData={seasons} />
    </div>
  );
}

export default App;
