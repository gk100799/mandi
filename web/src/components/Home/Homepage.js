import React, { useState } from "react";
import Cards from "../CardUI/Card";
import NavBar from "../NavBar/NavBar";

const cardDetails = [
  {
    thumbnail:
      "https://i.picsum.photos/id/77/300/300.jpg?hmac=mEnl4SzbrHow_jAsdNyvpyYGdlRHDTx9eCXCBJZVI80",
    title: "Summer Pier",
    votes: 97463,
    comments: 4645,
  },
  {
    thumbnail:
      "https://i.picsum.photos/id/569/500/300.jpg?hmac=gL7t85EgKRl7CIsC4zAboFpxguh1Rfi8d_AENsR9ylM",
    title: "Old town road by the river",
    votes: 601,
    comments: 25,
  },
  {
    thumbnail:
      "https://i.picsum.photos/id/91/400/900.jpg?hmac=R-t0kHOVy6Lo0vqeoV9qjR5dEYlNb0L1QU71mab9SjU",
    title: "TLR",
    votes: 2929,
    comments: 3939,
  },
  {
    thumbnail:
      "https://i.picsum.photos/id/439/500/900.jpg?hmac=lAxE7oVf1ia_DXvsRQMz7p5Y_f3TUxLHbSt6HL2BGzc",
    title: "Grey City",
    votes: 7878,
    comments: 987,
  },
  {
    thumbnail:
      "https://i.picsum.photos/id/904/800/600.jpg?hmac=lcqjcYmV9lJ8FAaZKT-bCmTDeqB2LIQzZyFk6WWaOSU",
    title: "Skates",
    votes: 6197,
    comments: 321,
  },
];

function Homepage() {
  const cardList = cardDetails.map((elem) => {
    return (
      <Cards
        title={elem.title}
        image={elem.thumbnail}
        votes={elem.votes}
        comments={elem.comments}
      />
    );
  });

  return (
    <div>
      <NavBar />
      <div className="grid xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-2 ">
        {cardList}
        {/* <Cards
          title={cardDetails[0].title}
          image={cardDetails[0].thumbnail}
          votes={cardDetails[0].votes}
          comments={cardDetails[0].comments}
        /> */}
      </div>
    </div>
  );
}

export default Homepage;
