import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TipoSchema = new Schema({
	nombre : String,
	image : String
});


const Tipo = mongoose.model('Tipo', TipoSchema);

export default Tipo;