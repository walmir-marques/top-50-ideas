import Header from "./components/Header";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import { db } from "../../../utils";
import { Ideas } from "../../../utils/schema";
import { useLocation } from "react-router-dom";
import { desc } from "drizzle-orm";
import { useEffect, useState } from "react";
import IdeaList from "./components/IdeaList";

function HomeScreen() {
  const params = useLocation();
  const [ideaList, setIdeaList] = useState([]);

  useEffect(() => {
    getAllIdeas();
  }, [params]);

  const getAllIdeas = async () => {
    const result = await db
      .select()
      .from(Ideas)
      .orderBy(
        desc(
          params.hash == "#hot" || params.hash == "#top" ? Ideas.vote : Ideas.id
        )
      )
      .limit(20);

    setIdeaList(result);
  };

  return (
    <div>
      <Header />
      <Hero />
      <Tabs />
      <IdeaList ideaList={ideaList} refreshData={getAllIdeas} />
    </div>
  );
}
export default HomeScreen;
