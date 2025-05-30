import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';
import { alertService } from './alert.service';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/contacts`;
const blogSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('blog')));

export const conatctService = {
    blog: blogSubject.asObservable(),
    get blogValue() { return blogSubject.value },
    register
};


async function register(blog) {
    await fetchWrapper.post(`${baseUrl}`, blog);
}



