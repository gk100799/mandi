import 'package:flutter/material.dart';
import 'package:mobile/widgets/contentcard.dart';
import 'package:mobile/sampledata.dart';
import 'package:mobile/widgets/sidenav.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: <Widget>[
          IconButton(icon: Icon(Icons.search), onPressed: () {}),
          IconButton(icon: Icon(Icons.settings), onPressed: () {}),
          IconButton(
            icon: Icon(Icons.more_vert),
            onPressed: () {},
          )
        ],
        iconTheme: IconThemeData(color: Colors.black),
        backgroundColor: Colors.transparent,
        title: Text(
          'Mandi',
          style: TextStyle(color: Colors.black),
        ),
        elevation: 0,
      ),
      body: ContentCards(contentList: contents),
      drawer: SideNav(),
    );
  }
}
