import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = React.memo((props) => {
  console.log('render');
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>New post</div>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          validate={[required, maxLength10]}
          placeholder="Post message"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;
