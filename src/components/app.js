/**
 * Libraries
 */

import React,{
   Component
} from 'react';

/**
 * Components
 */

import List from './list/list';
import Form from './form/form';
import Post from './post/post';

/**
 * Styles
 */


/**
 *  Post component definition and export
 */
export class App extends Component {

   /**
    * Constructor
    */

  
   /**
    * Methods
    */


   /**
    * Markup
    */

   render(){
      return(
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <List />
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form />
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Posts</h2>
                <Post />
            </div>
      </div>
      );
   }
}

/**
 * Prop types
 */


export default App;