import React from 'react'

const Blogs = () => {
    return (

        <div>
            <h1 className="text-3xl font-semibold  my-4 text-center">Welcome to our Blogs</h1>


            <div className="bg-base-100 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-neutral font-semibold py-4 text-xl"> Difference between SQL and NoSQL?</h1>
                <p className="text-neutral list-decimal space-y-2">
                    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>  SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li> SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                </p>
            </div>
            <div className="bg-base-100 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-neutral font-semibold py-4 text-xl">What is JWT, and how does it work?</h1>
                <p className="text-neutral">
                    JWT  or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued <br /><br />

                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                </p>
            </div>
            <div className="bg-base-100 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-neutral font-semibold py-4 text-xl">What is the difference between javascript and NodeJS?</h1>
                <p className="text-neutral">
                    <span className="font-semibold">Node.js: </span> is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.<br />
                    On the other hand <span className="font-semibold">Javascript </span> is a programing language by basically interacts with the browser deals with objects, function, methods etc.There are many frame works of it. Node js is one of the frameworks tyhat provides runtime support.
                </p>
            </div>
            <div className="bg-base-100 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-neutral font-semibold py-4 text-xl">How does NodeJS handle multiple requests at the same time?</h1>
                <p className="text-neutral">
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.<br /><br />
                    Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.t.<br />
                </p>
            </div>
        </div>

    )
}

export default Blogs