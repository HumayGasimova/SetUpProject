/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
import { 
    connect 
} from "react-redux";
import { 
    getData 
} from "../../actions/exampleAction";
 
 /**
  *  Post component definition and export
  */
 export class Post extends Component {
 
    /**
     * Constructor
     */
    constructor() {
        super();
      }
   
    /**
     * Methods
     */
    componentDidMount() {
        this.props.getData();
      }
 
    /**
     * Markup
     */
 
    render() {
        return (
          <ul className="list-group list-group-flush">
            {this.props.articles.map(el => (
              <li className="list-group-item" key={el.id}>
                {el.title}
              </li>
            ))}
          </ul>
        );
      }
    
 }
 
 /**
  * Prop types
  */
 
  
 function mapStateToProps(state) {
    return {
      articles: state.remoteArticles.slice(0, 10)
    };
  }
  export default connect(
    mapStateToProps,
    { getData }
  )(Post);