import { eq } from "drizzle-orm";
import { db } from "../../../../utils";
import { Ideas } from "../../../../utils/schema";
import {
  checkIsAlreadyDownVoted,
  checkIsAlreadyVoted,
  downvote,
  upvote,
} from "../../../Service/index";

function IdeaItem({ item, index, refreshData }) {
  const upVoteHandler = async () => {
    if (upvote(item.id)) {
      const result = await db
        .update(Ideas)
        .set({
          vote: item.vote + 1,
        })
        .where(eq(Ideas.id, item.id))
        .returning({ id: Ideas.id });
      if (result) {
        refreshData();
      }
    }
  };

  const downVote = async () => {
    if (downvote(item.id)) {
      const result = await db
        .update(Ideas)
        .set({
          vote: item.vote - 1,
        })
        .where(eq(Ideas.id, item.id))
        .returning({ id: Ideas.id });
      if (result) {
        refreshData();
      }
    }
  };

  return (
    <div className="my-5 p-5 border shadow-lg rounded-lg">
      <div className="flex gap-7">
        <article className="w-full break-words">
          <h2 className="text-wrap">
            <span className="font-bold">{index + 1}.</span> {item?.content}
          </h2>
        </article>
        <div className="flex flex-col items-center">
          <h2
            className={`text-lg hover:bg-gray-200 rounded-b-md p-1 cursor-pointer px-2 ${
              checkIsAlreadyVoted(item.id) && "disabled opacity-50"
            }`}
            onClick={() => upVoteHandler()}
          >
            🔥
          </h2>
          <h2 className="text-lg hover:bg-gray-200 rounded-b-md p-1 cursor-pointer font-bold">
            {item.vote}
          </h2>
          <h2
            className={`text-lg hover:bg-gray-200 rounded-b-md p-1 cursor-pointer px-2 ${
              checkIsAlreadyDownVoted(item.id) && "disabled opacity-50"
            }`}
            onClick={() => downVote()}
          >
            👎🏻
          </h2>
        </div>
      </div>
      <h2 className="mt-4 text-gray-400 text-sm flex gap-5">
        <span> </span>
        Por @{item.username} em {item.createdAt}
      </h2>
    </div>
  );
}

export default IdeaItem;
