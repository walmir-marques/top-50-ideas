import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Tabs() {
  const [activeTab, setActiveTab] = useState();
  const params = useLocation();

  useEffect(() => {
    setActiveTab(params.hash);
  }, [params]);

  return (
    <div role="tablist" className="tabs tabs-bordered ">
      <a
        role="tab"
        className={`tab text-lg font-bold ${
          activeTab === "#hot" && "tab-active"
        }`}
        href="/#hot"
      >
        🔥 Alta
      </a>
      <a
        role="tab"
        className={`tab text-lg font-bold ${
          activeTab === "#new" && "tab-active"
        }`}
        href="/#new"
      >
        ✨ Recentes
      </a>
      <a
        role="tab"
        className={`tab text-lg font-bold ${
          activeTab === "#top" && "tab-active"
        }`}
        href="/#top"
      >
        🏆 +Curtidos
      </a>
    </div>
  );
}
export default Tabs;
