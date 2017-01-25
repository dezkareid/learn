import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
	nombre : String,
	numero : Number,
	preEvolucion : {
		type : Schema.Types.ObjectId,
		ref : 'Pokemon'
	},
	tipos : [{
		type : Schema.Types.ObjectId,
		ref : 'Tipo'
	}],
	ataques : [{
		type : Schema.Types.ObjectId,
		ref : 'Ataque'
	}]
});


const Pokemon = mongoose.model('Pokemon', PokemonSchema);

export default Pokemon;