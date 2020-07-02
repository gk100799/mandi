import React from "react";

const Cards = props => {
  return (
    <div class="max-w-lg rounded overflow-hidden shadow-2xl m-auto">
     {/* Image goes here */}
     <img src={props.image} alt={props.title} class="w-full" />
      <div class="px-6 py-4">
            {/* Title Section */}
        <div class="mb-2">{props.title}</div>
      </div>
      <div class="px-6 py-4">
        <span class=" rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {/* Upvotes */}
        <i class="material-icons">arrow_upward</i>
          {props.votes}
        </span>
            {/* Comments */}
        <span class=" rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
         <i class="material-icons">mode_comment</i> 
         {props.comments}
        </span>
      </div>
    </div>
  );
};

export default Cards;
