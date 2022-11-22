import {React, useState, useEffect} from 'react';
import EmptyList from '../components/EmptyList';
import PostList from '../components/PostList';
import Header from '../components/Header';
import {init_load} from '../config/Api';
import PostItem from "../components/PostItem";

const LandingPage = () => {
    const [posts, setPosts] = useState([]);
    const [latest, setLatest] = useState([])

    useEffect(() => {
        init_load().then((res) => {
                setPosts(res['initial_posts']);
                setLatest(res['headliner']);
            }
        )
    }, []);

    // function to get selected post content
    return (
        <div>
            <Header/>
            <PostItem post={latest}/>
            {!posts.length ? <EmptyList/> : <PostList posts={posts}/>}
        </div>
    );
};
export default LandingPage;