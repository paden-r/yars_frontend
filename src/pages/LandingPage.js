import {React,  useState, useEffect } from 'react';
import EmptyList from '../components/EmptyList';
import PostList from '../components/PostList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { postList } from '../config/Api';

const LandingPage = ({data}) => {
  const [posts, setPosts] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
  // Search for post by category
  const handleSearchResults = () => {
   //handle search inputs
  };
  // Clear search and show all posts
  const handleClearSearch = () => {
    postList().then((res) => {
      setPosts(res);
    })
    setSearchKey("");
  };

  // function to get selected post content
 const PostContent = (id) => {
  data(id);
}
  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      {/*<SearchBar*/}
      {/*  value={searchKey}*/}
      {/*  clearSearch={handleClearSearch}*/}
      {/*  formSubmit={handleSearchBar}*/}
      {/*  handleSearchKey={(e) => setSearchKey(e.target.value)}*/}
      {/*/>*/}
      {/* Blog List & Empty View */}
      {!posts.length ? <EmptyList /> : <PostList blogs={posts} content = {PostContent}/>}
    </div>
  );
};
export default LandingPage;