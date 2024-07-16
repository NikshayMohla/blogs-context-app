import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {

    const [blog, setBlog] = useState(null)
    const [relatedBlogs, setRelatedBlogs] = useState([])
    const navigation = useNavigation();
    const location = useLocation();
    const { setLoading, loading } = useContext(AppContext)


    const blogId = location.pathname.split("/").at(-1);
    async function fetchRelatedBlogs() {
        setLoading(true)
        let url = `${baseUrl}?blogId=${blogId}`
        try {
            const res = await fetch(url)
            const data = await res.json()
            setBlog(data.blog)
            setRelatedBlogs(data.relatedBlogs)
        }
        catch {
            console.log("NOT FOUND")
        }
    }

    return (
        <div>

        </div>
    )
}

export default BlogPage
