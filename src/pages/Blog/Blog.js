import React from 'react';

const Blog = () => {
    return (
        <div className="py-16 w-10/12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="flex">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Question</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">1</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <span
                  className="text-xl font-bold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400"
                >
                  Difference between SQL and NoSQL
                </span>
              </div>
              <div className="mb-5 text-gray-700 overflow-x-auto">
                <table className="table-fixed w-full">
                    <thead>
                    <tr>
                        <th>SQL</th>
                        <th>NoSQL</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>SQL databases are relational</td>
                        <td>NoSQL databases are non-relational</td>
                    </tr>
                    <tr>
                        <td>SQL databases use structured query language and have a predefined schema</td>
                        <td>NoSQL databases have dynamic schemas for unstructured data</td>
                    </tr>
                    <tr>
                        <td>SQL databases are vertically scalable</td>
                        <td>NoSQL databases are horizontally scalable</td>
                    </tr>
                    <tr>
                        <td>SQL databases are table-based</td>
                        <td>NoSQL databases are document, key-value, graph, or wide-column stores</td>
                    </tr>
                    <tr>
                        <td>SQL databases are better for multi-row transactions</td>
                        <td>NoSQL is better for unstructured data like documents or JSON</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Question</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">2</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <span className="text-xl font-bold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400">
                  What is JWT, and how does it work?
                </span>
              </div>
              <p className="mb-5 text-gray-700">
              JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.
              <br />
              When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server. 
              By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Question</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">3</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <span className="text-xl font-bold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400">
                  What is the difference between javascript and NodeJS?
                </span>
              </div>
              <div className="mb-5 text-gray-700 overflow-x-auto">
                <table className="table-fixed w-full">
                    <thead>
                    <tr>
                        <th>Javascript</th>
                        <th>NodeJS</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>JavaScript is a proper high-level programming language used to create web scripts</td>
                        <td>Node.js is a run time environment built on google’s v8 engine</td>
                    </tr>
                    <tr>
                        <td>JavaScript is executed in the browser</td>
                        <td>Node.js gives us the ability to execute JavaScript outside the browser</td>
                    </tr>
                    <tr>
                        <td>JavaScript can manipulate DOM or add HTML</td>
                        <td>Node.js doesn’t have the capability to add HTML</td>
                    </tr>
                    <tr>
                        <td>JavaScript is mainly used to create front end web applications or develop client-side</td>
                        <td>Node.js is used on the back end development that is server-side development</td>
                    </tr>
                    <tr>
                        <td>JavaScript follows standard of JavaScript when writing programs</td>
                        <td>Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Question</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">4</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <span
                  className="text-xl font-bold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400">
                  How does NodeJS handle multiple requests at the same time?
                </span>
              </div>
              <p className="mb-5 text-gray-700">
              NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
              </p>
            </div>
          </div>
        </div>
      </div>
  
    );
};

export default Blog;