import { Tipo } from '../models';
import TipoType from './TipoType';
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const AtaqueType = new GraphQLObjectType({
	name : 'ataque',
	fields : () => ({
		id : {
			type : GraphQLID
		},
		nombre : {
			type : GraphQLString
		},
		tipo : {
			type : TipoType,
			resolve: (ataque) => {
				return Tipo.findOne({
					_id: ataque.tipo.toString()
				});
			}
		}
	})
});

export default AtaqueType;