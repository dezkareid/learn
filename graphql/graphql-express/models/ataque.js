import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AtaqueSchema = new Schema({
	nombre : String,
	tipo : {
		type : Schema.Types.ObjectId,
		ref : 'Tipo'
	}
});


const Ataque = mongoose.model('Ataque', AtaqueSchema);

export default Ataque;