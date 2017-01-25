import express from 'express';
import graphqlHttp from 'express-graphql';
import schema from './schema';
import mongoose from 'mongoose';

const app = express();
mongoose.Promise = global.Promise;

app.use('/graphql', graphqlHttp({
	schema : schema,
	rootValue : global,
	graphiql : true,
}));

mongoose.connect('mongodb://127.0.0.1:27017/pokemon');
app.listen(4000);
console.log("Terremoto, Terremoto lol");