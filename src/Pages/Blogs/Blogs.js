import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center my-4">Blog Section</h2>

      {/* Question - 1 */}
      <div className="question-1 mx-auto my-5">
        <h4 className="text-center my-3">JavaScript VS NodeJs</h4>
        <hr />
        <div>
          <p>1. Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.</p>
          <p>2. It is basically used on the client-side or frontend development. Nodejs is used in server-side development.</p>
          <p>3. Javascript can only be run in the browsers. We can run Javascript outside the browser with the help of NodeJS.</p>
        </div>
      </div>

      {/* Question - 2 */}
      <div className="question-2 mx-auto my-5">
        <h3 className="text-center">Question - 2</h3>
        <hr />
        <div>
          <h4 className="text-center my-3">A. When to use NodeJs?</h4>
          <p>1. Connect quickly in a web application</p>
          <p>2. When one know Javascript</p>
          <p>3. used for non-blocking, event-driven servers</p>
          <p>4. used for traditional web sites and back-end API services</p>
          <hr />
        </div>

        <div>
          <h4 className="text-center my-3">B. When to use MongoDB?</h4>
          <p>1. When data is document-centric and doesn't fit well into the schema of a relational database</p>
          <p>2. Integrating large amounts of diverse data</p>
          <p>3. Specialized data formats like geospatial </p>
          <p>4. applications that need to run wherever they make sense</p>
        </div>
      </div>

      {/* Question - 3 */}
      <div className="question-3 mx-auto my-5">
        <h3 className="text-center my-3">Question - 3</h3>
        <hr />
        <h4 className="text-center my-3">SQL vs NoSQL</h4>
        <div>
          <p>1. SQL databases are relational, NoSQL databases are non-relational.</p>
          <p>
            2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
          </p>
          <p>3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
          <p>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
