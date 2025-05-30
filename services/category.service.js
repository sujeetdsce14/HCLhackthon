import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';
import { alertService } from './alert.service';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/category`;
const blogSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('blog')));

export const categoryService = {
    blog: blogSubject.asObservable(),
    get blogValue() { return blogSubject.value },
    getAllByCategory
};





async function getAllByCategory(category) {
    return await fetchWrapper.get(`${baseUrl}/${category}`);
}


