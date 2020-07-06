import React from "react";

const Cards = (props) => {
  return (
    <div className="rounded overflow-hidden shadow-2xl m-auto">
      {/* Image goes here */}
      <img src={props.image} alt={props.title} className="w-full" />
      <div className="px-6 py-4">
        {/* Title Section */}
        <div className="mb-2">{props.title}</div>
      </div>
      <div className="px-6 py-4">
        <span className=" rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {/* Upvotes */}
          <i className="material-icons">arrow_upward</i>
          {props.votes}
        </span>
        {/* Comments */}
        <span className=" rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          <i className="material-icons">mode_comment</i>
          {props.comments}
        </span>
      </div>
    </div>
  );
};

export default Cards;
