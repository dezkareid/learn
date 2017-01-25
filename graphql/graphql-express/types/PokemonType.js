import { Tipo, Ataque, Pokemon } from '../models';
import TipoType from './TipoType';
import AtaqueType from './AtaqueType';
import { GraphQLObjectType, 
	GraphQLID, GraphQLInt, 
	GraphQLString, GraphQLList } from 'graphql';

const PokemonType = new GraphQLObjectType({
	name : 'pokemon',
	fields : () => ({
		id : {
			type : GraphQLID
		},
		numero : {
			type : GraphQLInt
		},
		nombre : {
			type : GraphQLString
		},
		ataques : {
			type : new GraphQLList(AtaqueType),
			resolve: (pokemon) => {
				return Ataque.find({
					_id: {
						$in: pokemon.ataques.map((id) => id.toString())
					} 
				});
			}
		},
		tipos : {
			type : new GraphQLList(TipoType),
			resolve: (pokemon) => {
				return Tipo.find({
					_id: {
						$in: pokemon.tipos.map((id) => id.toString())
					} 
				});
			}
		},
		preEvolucion : {
			type : PokemonType,
			resolve: (pokemon) => {
				return Pokemon.findOne({
					_id: pokemon.preEvolucion.toString()
				});
			}
		}
	})
});

export default PokemonType;