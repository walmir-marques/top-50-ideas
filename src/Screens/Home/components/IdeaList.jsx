import IdeaItem from "./IdeaItem";

const IdeaList = ({ ideaList, refreshData }) => {
  return (
    <div>
      {ideaList.map((item, index) => (
        <IdeaItem
          key={index}
          item={item}
          index={index}
          refreshData={refreshData}
        />
      ))}
    </div>
  );
};
export default IdeaList;
