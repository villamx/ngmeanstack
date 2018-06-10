import * as mongoose from 'mongoose';

function extendSchema(Schema, definition, options) {
  return new mongoose.Schema(
    Object.assign({}, Schema.obj, definition),
    options,
  );
}

const FileSchema = new mongoose.Schema({
  name: {type: String},
  size: {type: Number},
  type: {type: String, default: ''},
}, {_id: false, id: false});

const ImageFileSchema = extendSchema(FileSchema, {
  metadata: {type: Buffer},
  loadDate: {type: Date, default: Date.now},
}, {_id: false, id: false});

export const MeetupSchema = new mongoose.Schema({
  _id: {type: String},
  name: {type: String},
  author: {type: String},
  description: {type: String},
  orientation: {type: String, default: 'P'},
  image: {type: ImageFileSchema, default: ImageFileSchema},
}, {_id: false, id: false});

/** Fat arrow syntax, here it has no lexical scope and cannot be bound to a given context. */
MeetupSchema.pre('save', function (next) {
  console.log(this._id);
  this._id = this.name.replace(/\s/g, '').toLowerCase();
  console.log(JSON.stringify(this));
  next();
});
