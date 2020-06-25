import 'package:flutter/material.dart';
import 'package:mobile/screens/home.dart';

void main() => runApp(MaterialApp(
        title: 'Mandi',
        initialRoute: 'home',
        routes: {
            'home': (context) => HomeScreen(),
        }
        ));
