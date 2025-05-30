import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';
import { alertService } from './alert.service';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/articles`;
const blogSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('blog')));

export const articleService = {
    blog: blogSubject.asObservable(),
    get blogValue() { return blogSubject.value },
    getAll,
    getById,
    getAllByCategory,
    getAllFeatured
};




async function getAll() {
    return await fetchWrapper.get(baseUrl);
}

async function getById(id) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}


async function getAllByCategory(category) {
    return await fetchWrapper.get(`${baseUrl}/category/${category}`);
}

async function getAllFeatured() {
    return await fetchWrapper.get(`${baseUrl}/featured`);
}


