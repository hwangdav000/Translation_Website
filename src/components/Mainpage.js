import React from 'react';

class Mainpage extends React.Component {
  render() {
    return (
      <div
        className="main"
        style={{ paddingTop: 30 }}
      >
        <div>
          <strong>Main Page</strong>
        </div>
        <br></br>
        <p>
          This website is a collection of all of my Korean translations.&nbsp;
        </p>
        <p>It was built in part to help me learn the language and also</p>
        <p>
          learn web creation in the process. I will try updating this
          website&nbsp;
        </p>
        <p>occasionally to allow for better functionality and UI.</p>
        <br></br>
        <p>
          The website was built using React and a collection of other React
          libraries.
        </p>
        <br></br>
      </div>
    );
  }
}

export default Mainpage;
