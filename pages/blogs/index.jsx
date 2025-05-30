import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Spinner } from 'components';
import { Layout } from 'components/blogs';
import { blogService } from 'services';

export default Index;

function Index() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        blogService.getAll().then(x => setBlogs(x));
    }, []);

    function deleteBlogs(id) {
        setBlogs(blogs.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        blogService.delete(id).then(() => {
            setBlogs(blogs => blogs.filter(x => x.id !== id));
        });
    }

    return (
        <Layout>
            <h1>Blogs</h1>
            <Link href="/blogs/add" className="btn btn-sm btn-success mb-2">Add Blogs</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '40%' }}>Title</th>
                        <th style={{ width: '40%' }}>Short Description</th>
                        <th style={{ width: '10%' }}>Status</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {blogs && blogs.map(blog =>
                        <tr key={blog.id}>
                            <td>{blog.title}</td>
                            <td>{blog.shortDescription}</td>
                            <td>{blog.published}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link href={`/blogs/edit/${blog.id}`} className="btn btn-sm btn-primary me-1">Edit</Link>
                                <button onClick={() => deleteBlogs(blog.id)} className="btn btn-sm btn-danger btn-delete-user" style={{ width: '60px' }} disabled={blog.isDeleting}>
                                    {blog.isDeleting
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!blogs &&
                        <tr>
                            <td colSpan="4">
                                <Spinner />
                            </td>
                        </tr>
                    }
                    {blogs && !blogs.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </Layout>
    );
}
