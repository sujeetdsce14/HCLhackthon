import { apiHandler, blogsRepo } from 'helpers/api';


export default apiHandler({
    get:getAllByCategory
});

async function getAll(req, res) {
    const blogs = await blogsRepo.getAll();
    return res.status(200).json(blogs);
}
async function getAllFeatured(req, res) {
    const blogs = await blogsRepo.getAllFeatured();
    return res.status(200).json(blogs);
}
async function getAllByCategory(req, res) {
    const url=req.url;
    
    const pathSegments = url.split('/');

    // Get the last parameter (last element in the pathSegments array)
    const category= pathSegments[pathSegments.length - 1];


    const blogs = await blogsRepo.getAllByCategory(category);
    return res.status(200).json(blogs);
}
