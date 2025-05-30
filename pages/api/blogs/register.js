import { apiHandler, blogsRepo } from 'helpers/api';

export default apiHandler({
    post: register
});

async function register(req, res) {
    await blogsRepo.create(req.body);
    return res.status(200).json({});
}
