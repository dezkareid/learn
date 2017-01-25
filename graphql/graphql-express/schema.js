import { Tipo, Ataque, Pokemon } from './models';
import { TipoType, AtaqueType, PokemonType } from './types';
import { 
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLSchema
} from 'graphql';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
	ataques : {
		type: new GraphQLList(AtaqueType),
		resolve: (source, args, root, asts) => {
			return Ataque
			  .find();
		}
	},
	pokemons : {
		type: new GraphQLList(PokemonType),
		resolve: (source, args, root, asts) => {
			//let values = ast.fieldNodes[0].selectionSet.selections.map(selection => selection.name.value);
			return Pokemon
			  .find();
		}
	},
	tipos: {
		type: new GraphQLList(TipoType),
		resolve: (source, args, root, ast) => {
			return Tipo
			  .find();
		}
	},
  })
});

export default new GraphQLSchema({
	query : QueryType
});