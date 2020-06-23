import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose'

import graphqlSchema from './graphql/schema/index'
import graphqlResolvers from './graphql/resolvers/index'


var app = express();

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true,
}));


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mandidb-sdbcm.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(4000, () => console.log("Server running at port 4000"));
  })
  .catch(err => {
    console.log(err);
  });

