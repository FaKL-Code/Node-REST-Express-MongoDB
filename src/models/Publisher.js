import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
}, { versionKey: false });

const publisher = mongoose.model("publishers", publisherSchema);

export { publisher, publisherSchema };

