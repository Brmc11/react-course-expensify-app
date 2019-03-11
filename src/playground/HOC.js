// Higher ORder Component (HOC) - A component (HOC) that renders another componentu
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
 <div>
   <h1>Info</h1>
   <p>The info is: {props.info}</p>
 </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share</p>}
      <WrappedComponent {...props } />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ?
          <WrappedComponent {...props} /> :
          <p>Please log in to gain access to this area.</p>
      }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is tys zhitzzz" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is tys zhitzzz" />, document.getElementById('app'));
