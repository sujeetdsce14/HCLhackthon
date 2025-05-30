import { apiHandler, contactRepo} from 'helpers/api';

export default apiHandler({
    post: register
});

async function register(req, res) {
    await contactRepo.create(req.body);
    return res.status(200).json({});
}
