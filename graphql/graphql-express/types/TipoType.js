import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const TipoType = new GraphQLObjectType({
	name : 'tipo',
	fields : () => ({
		id : {
			type : GraphQLID
		},
		nombre : {
			type : GraphQLString
		},
		imagen : {
			type : GraphQLString
		}
	})
});

export default TipoType;