import mongoose from "mongoose";

const jogoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    publisher: { type: String },
    categoria: { type: String },
    preco: { type: Number }
}, { versionKey: false });

const jogo = mongoose.model("jogos", jogoSchema);

export default jogo;