import { apiHandler, blogsRepo } from 'helpers/api';
import { useRouter } from 'next/router';

export default apiHandler({
    get: getById
});

async function getById(req, res) {
    const blog= await blogsRepo.getById(req.query.id);

    if (!blog) throw 'blog Not Found';

    return res.status(200).json(blog);
}
async function getAllByCategory(req, res) {
    const url=req.url;
    
    const pathSegments = url.split('/');

    // Get the last parameter (last element in the pathSegments array)
    const category= pathSegments[pathSegments.length - 1];

   
    const blogs = await blogsRepo.getAllByCategory(category);
    return res.status(200).json(blogs);
}

