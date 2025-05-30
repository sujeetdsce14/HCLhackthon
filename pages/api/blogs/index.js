import { apiHandler, blogsRepo } from 'helpers/api';

export default apiHandler({
    get: getAll
});

async function getAll(req, res) {
    const blogs = await blogsRepo.getAll();
    return res.status(200).json(blogs);
}


