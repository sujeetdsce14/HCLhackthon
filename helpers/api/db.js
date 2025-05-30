import getConfig from 'next/config';
import mongoose from 'mongoose';

const { serverRuntimeConfig } = getConfig();
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString);
mongoose.Promise = global.Promise;

export const db = {
    User: userModel(),
    Blog:blogModel(),
    Contact:contactModel()
};

// mongoose models with schema definitions

function userModel() {
    const schema = new Schema({
        username: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.User || mongoose.model('User', schema);
}

function blogModel() {
    const schema = new Schema({
        title: { type: String, unique: true, required: true },
        metaKey: { type: String,required: true },
        shortDescription: { type: String, required: true },
        longDescription: { type: String, required: true },
        published: {type: String,required: true },
        category: {type: String,required: true },
        featured: {type: String,required: true },
    }, {
        timestamps: true
    });

    
    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.Blog || mongoose.model('Blog', schema);
}


function contactModel() {
    const schema = new Schema({
        name: { type: String, required: true },
        email: { type: String,required: true },
        phone: { type: String, required: true },
        query: { type: String, required: true },
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.Contact|| mongoose.model('Contact', schema);
}
