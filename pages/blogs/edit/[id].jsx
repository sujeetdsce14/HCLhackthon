import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout, AddEdit } from 'components/blogs';
import { Spinner } from 'components';
import { blogService, alertService } from 'services';

export default Edit;

function Edit() {
    const router = useRouter();
    const [blog, setBlogs] = useState(null);

    useEffect(() => {
        const { id } = router.query;
        if (!id) return;

        // fetch user and set default form values if in edit mode
        blogService.getById(id)
            .then(x => setBlogs(x))
            .catch(alertService.error)
    }, [router]);

    return (
        <Layout>
            <h1>Edit Blog</h1>
            {blog? <AddEdit blog={blog} /> : <Spinner />}
        </Layout>
    );
}