import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class StuffsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'StuffsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: {
        type: String,
        index: true,
        unique: true,
        max: 30,
      },
      description: {
        type: String,
        max: 120,
        optional: true,
      },
      quantity: {
        type: Number,
        min: 0,
        max: 100,
      },
      rating: {
        type: String,
        allowedValues: ['1-star', '2-star', '3-star', '4-star', '5-star'],
        defaultValue: '3-star',
      },
      notes: {
        type: String,
        optional: true,
      },
      owner: {
        type: String,
        max: 20,
      },
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {StuffsCollection}
 */
export const Stuffs = new StuffsCollection();
