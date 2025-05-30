import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
const Blog= db.Blog;

export const blogsRepo = {
    getAll,
    getById,
    create,
    update,
    getAllByCategory,
    getAllFeatured,
    delete: _delete
};



async function getAll() {
    return await Blog.find();
}
async function getAllByCategory(category){
    return await Blog.find({category:category});
   
}
async function getAllFeatured(){
    return await Blog.find({featured:"true"});
   
}
async function getById(id) {
    return await Blog.findById(id);
}

async function create(params) {
    // validate
    if (await Blog.findOne({ title: params.title })) {
        throw 'title "' + params.title+ '" is already published';
    }

    const blog = new Blog(params);

  

    // save user
    await blog.save();
}

async function update(id, params) {
    const blog = await Blog.findById(id);

    // validate
    if (!blog) throw 'blog not found';
    if (blog.title !== params.title && await Blog.findOne({ title: params.title })) {
        throw 'title "' + params.username + '" is already published';
    }

   

    // copy params properties to user
    Object.assign(blog, params);

    await blog.save();
}

async function _delete(id) {
    await Blog.findByIdAndRemove(id);
}
