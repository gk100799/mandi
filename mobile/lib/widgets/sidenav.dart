import 'package:flutter/material.dart';

class AccountDetails {
  String accName;
  String email;
  NetworkImage profilePic;

  AccountDetails({this.accName, this.email, this.profilePic});
}

List interests = [
  "Education",
  "Funny",
  "Meme",
  "Science",
  "News",
  "Physics",
  "Fights",
  "AMA",
  "sports",
  "politics",
  "AskMandi",
  "SongAdvice",
  "BooksToRead",
];

AccountDetails acc1 = AccountDetails(accName: "kd", email: "kd@mail.com");

class SideNav extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
        child: Column(
      children: <Widget>[
        UserAccountsDrawerHeader(
            onDetailsPressed: () {},
            accountName: Text(acc1.accName),
            accountEmail: Text(acc1.email)),
        Expanded(
            child: ListView.builder(
                shrinkWrap: true,
                itemCount: interests.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(title: Text(interests[index]));
                })),
      ],
    ));
  }
}
