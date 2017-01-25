import mongoose from 'mongoose';
import { Tipo, Ataque, Pokemon } from './models';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/pokemon');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Valio barriga'));
db.once('open', () => console.log("open"));

let tipo = new Tipo({ nombre: 'Hierba' });
tipo.save()
	.then( (data)=> {
		let ataque = new Ataque({ nombre : "Hojas navaja", tipo : tipo });
		return ataque.save();
	})
	.then((ataque)=> {
		let pokemon = new Pokemon({ nombre : "Bulbasaur", numero: 1, ataques : [ataque], tipos : [tipo]});
		return pokemon.save()
	})
	.then((pokemon)=>{
		return "Seed finish"
	})
	.catch((err)=>{
		console.log(err);
	});
