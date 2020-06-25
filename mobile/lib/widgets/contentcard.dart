import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:mobile/sampledata.dart';
class ContentCards extends StatelessWidget {
    final List<Content> contentList;
    ContentCards({this.contentList});
  @override
  Widget build(BuildContext context) {
return StaggeredGridView.countBuilder(
        crossAxisCount: 4,
        staggeredTileBuilder: (int index) =>
            StaggeredTile.fit(2),
            mainAxisSpacing: 4.0,
            crossAxisSpacing:4.0,
        itemCount: contents.length,
        itemBuilder: (BuildContext context, int index) {
      return Padding(padding: EdgeInsets.only(top:4, left:2, right:2, bottom:4),child:Column(children: <Widget>[
              contents[index].thumbnail,
              Text(contents[index].title, textAlign:TextAlign.start),
              Text("CategoryName", style: TextStyle(),textAlign:TextAlign.start),
              Row(
                children: <Widget>[
                  Icon(Icons.keyboard_arrow_up),
                  Text(contents[index].upvotes.toString()),
                  Icon(Icons.comment),
                  Text(contents[index].comments.toString())
                ],
              ),
            ],
          ));});}
  }

