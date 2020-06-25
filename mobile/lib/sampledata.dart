import 'package:flutter/material.dart';
class Content {
  Image thumbnail;
  String title;
  int upvotes;
  int comments;

  Content({this.thumbnail, this.title, this.upvotes, this.comments});
}

List<Content> contents = [
  Content(
      title:
          "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      upvotes: 9000,
      comments: 2000,
      thumbnail: Image(
          image: NetworkImage(
              'https://i.picsum.photos/id/209/300/700.jpg?hmac=YaO53WGBeMSfXlxq2GAvPesSEfOH3N70Rwact3ke43M'))),
  Content(
      title:
          "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      upvotes: 9000,
      comments: 2000,
      thumbnail: Image(
          image: NetworkImage(
              'https://i.picsum.photos/id/378/700/300.jpg?hmac=ec9G9oUyMUXC-xFrgS0q1v-tHcD8h6cXrfWCQ1o2Fm0'))),
  Content(
      title:
          "Non Cozy Restaurant but with a splendid view of the trees and the sky",
      upvotes: 9000,
      comments: 2000,
      thumbnail: Image(
          image: NetworkImage(
              'https://i.picsum.photos/id/919/300/200.jpg?hmac=K_Gj_rFLdlNccZlZmHNxUdGfeky4_uZMR2c8-x264xo'))),
  Content(
      title: 'Cozy Restaurant',
      upvotes: 55,
      comments: 20,
      thumbnail: Image(
          image: NetworkImage(
              'https://i.picsum.photos/id/834/300/500.jpg?hmac=sj-yrw7WwzKQPWLNezc7-eAZiKgbdqJY-Lbbv2f--ao'))),
  Content(
      title: "In three words I can sum up everything I've learned about life: it goes on.",
      upvotes: 55,
      comments: 20,
      thumbnail: Image(
          image: NetworkImage(
              'https://i.picsum.photos/id/197/800/300.jpg?hmac=0PhMSX4XCoGhzo7cDg9BmnQc1uNaZD4SoAY3dFKMjKY'))),
  Content(
      title: 'Cozy Restaurant',
      upvotes: 55,
      comments: 20,
      thumbnail: Image(
          image: NetworkImage(
              'https://i.picsum.photos/id/834/300/500.jpg?hmac=sj-yrw7WwzKQPWLNezc7-eAZiKgbdqJY-Lbbv2f--ao'))),
          
  Content(
      title: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
      upvotes: 55,
      comments: 20,
      thumbnail: Image(
          image: NetworkImage(
              'https://i.picsum.photos/id/633/200/800.jpg?hmac=TsDFzFfFs9luqE2j8amZsCutKBeUlsxwyOMp6wGP1c8'))),
];
