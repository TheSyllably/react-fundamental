import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/UI/PostForm';
import './css/App.css';



function App() {
 const [posts2, setPosts2] = useState([{
  id: 5, title: 'JS', body: 'dsc'}])


const createPost = (newPost) => {
  setPosts2( [...posts2, newPost] );

}

const removePost = (post) => {
  setPosts2(posts2.filter(p => p.id !==post.id))

}
 

  return (
    <div className="App">

    <PostForm create={createPost}></PostForm>
    <hr style={{margin: '15px 0 '}}/>
    <div> 
    <select> 
    <option value="value1"> По названию</option>
    <option value="value1"> По описанию</option>
    </select>
    </div>
    {posts2.length !== 0 ? <PostList remove={removePost} posts ={posts2} title='Список постов 2' /> : 
   <div>  <h1 style={{textAlign: 'center'}}> Посты не найдены!</h1></div>  }
    
   
     
    
    </div>
  );
}

export default App;
