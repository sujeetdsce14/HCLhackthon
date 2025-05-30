import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
const Contact= db.Contact;

export const contactRepo = {
    create
};




async function create(params) {
    // validate
    // if (await Blog.findOne({ title: params.title })) {
    //     throw 'title "' + params.title+ '" is already published';
    // }

    const contact= new Contact(params);

  

    // save user
    await contact.save();
}


