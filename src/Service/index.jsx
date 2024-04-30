export const upvote = (id) => {
  let votes = localStorage.getItem("votes");
  if (!votes) {
    votes = { upvotes: [], downvotes: [] };
  } else {
    votes = JSON.parse(votes);
  }

  if (votes.upvotes.indexOf(id) !== -1) {
    return false;
  }

  votes.upvotes.push(id);
  const downVotes = votes.downvotes?.filter((item) => item !== id);
  votes.downvotes = downVotes;

  localStorage.setItem("votes", JSON.stringify(votes));
  return true;
};

export const downvote = (id) => {
  let votes = localStorage.getItem("votes");
  if (!votes) {
    votes = { upvotes: [], downvotes: [] };
  } else {
    votes = JSON.parse(votes);
  }

  if (votes.downvotes.indexOf(id) !== -1) {
    return false;
  }

  votes.downvotes.push(id);
  const upVotes = votes.upvotes?.filter((item) => item !== id);
  votes.upvotes = upVotes;

  localStorage.setItem("votes", JSON.stringify(votes));
  return true;
};

export const checkIsAlreadyVoted = (id) => {
  const votes = JSON.parse(localStorage.getItem("votes")) || {
    upvotes: [],
    downvotes: [],
  };
  return votes.upvotes?.includes(id);
};

export const checkIsAlreadyDownVoted = (id) => {
  const votes = JSON.parse(localStorage.getItem("votes")) || {
    upvotes: [],
    downvotes: [],
  };
  return votes.downvotes?.includes(id);
};
