import 'package:flutter/material.dart';
import 'package:mobile/widgets/contentcard.dart';
import 'package:mobile/sampledata.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text(
          'Mandi',
          style: TextStyle(color: Colors.black),
        ),
        elevation: 0,
      ),
      body: ContentCards(contentList: contents),
    );
  }
}
