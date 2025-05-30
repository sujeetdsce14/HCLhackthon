import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';
import { alertService } from './alert.service';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/blogs`;
const blogSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('blog')));

export const blogService = {
    blog: blogSubject.asObservable(),
    get blogValue() { return blogSubject.value },
    register,
    getAll,
    getById,
    update,
    delete: _delete
};


async function register(blog) {
    await fetchWrapper.post(`${baseUrl}/register`, blog);
}

async function getAll() {
    return await fetchWrapper.get(baseUrl);
}

async function getById(id) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function update(id, params) {
    await fetchWrapper.put(`${baseUrl}/${id}`, params);

    // update stored user if the logged in user updated their own record
    // if (id === blogSubject.value.id) {
    //     // update local storage
    //     const blog = { ...blogSubject.value, ...params };
    //     localStorage.setItem('blog', JSON.stringify(blog));

    //     // publish updated user to subscribers
    //     blogSubject.next(blog);
    // }
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
    await fetchWrapper.delete(`${baseUrl}/${id}`);
}
