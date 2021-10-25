/* Exercise from "Modern React with Redux" by: Stephen Grider  */

<script type="text/babel" data-presets="env,react>
  const App = () => {
    return (
      <div>
        <Segment>
          <div className="ui icon header">
            <i className= "pdf file outline icon"></i>
            No documents are listed for this costumer.
            </div>
            <div className="ui primary button">Add Document</div>
        </Segment>
        <Segment>
          <h4 class="ui header">For your information</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id aliquam turpis.
              Integer eget nisi arcu. Nulla risus ligula, blandit in varius in, aliquet consequat augue.
              Maecenas at turpis varius, ultrices ex eu, aliquam leo. 
              Fusce a tortor et leo laoreet fringilla. Suspendisse potenti. Duis elementum ullamcorper semper. 
              Nulla lacus velit, lacinia non tortor ut, semper fermentum orci. 
              Praesent ornare, lorem nec tempus porttitor, lectus sapien maximus nibh, nec iaculis augue lectus quis diam. 
              Integer congue eros nec metus consequat egestas bibendum nec metus. 
             </p>
          </Segment>
      </div>
      );
    }
  
  const Segment (props) => {
    return <div className="ui placeholder segment"> {props.children}</div>
  };

//Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));
  
  
