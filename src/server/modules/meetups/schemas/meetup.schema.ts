import * as mongoose from 'mongoose';

export const MeetupSchema = new mongoose.Schema({
  _id: {type: String},
  name: {type: String, required: true},
  author: {type: String, required: true},
  description: {type: String, required: true},
  orientation: {type: String, default: 'P'},
}, {_id: false, id: false});

/*MeetupSchema.path('name').set(value => {
  console.log(new Date());
  console.log(this.isNew);
  if (this.isNew !== true) {
    this._id = 'paint-' + value.replace(/\s/g, '').toLowerCase();
  }
  console.log(JSON.stringify(this));
  return value;
});*/

/** Fat arrow syntax, here it has no lexical scope and cannot be bound to a given context. */
MeetupSchema.pre('save', function (next) {
  console.log(this._id);
  this._id = 'meet-' + this.name.replace(/\s/g, '').toLowerCase();
  console.log(JSON.stringify(this));
  next();
});
