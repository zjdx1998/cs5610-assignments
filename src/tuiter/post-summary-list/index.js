import React, { useEffect } from "react";
// import postsArray from "./tuits.json";
import PostSummaryItem from "./post-summary-item";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";

const PostSummaryList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  console.log(tuits);
  return (
    <ul className="list-group">
      {tuits.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostSummaryList;
