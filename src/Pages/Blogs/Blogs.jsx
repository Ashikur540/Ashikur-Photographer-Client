import React from 'react'

const Blogs = () => {
    return (

        <div>
            <h1 className="text-3xl font-semibold  my-4 text-center">Welcome to our Blogs</h1>


            <div className="bg-base-100 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-neutral font-semibold py-4 text-xl"> Difference between SQL and NoSQL?</h1>
                <p className="text-neutral">
                    Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
                </p>
            </div>
            <div className="bg-base-100 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-neutral font-semibold py-4 text-xl">What is JWT, and how does it work?</h1>
                <p className="text-neutral">
                    JWT is a token based technlogy which is used for authorization purpose. <br />
                    Apart from that there are some other services we can use are <b>Heroku</b>,  <b>Deployd</b> ,<b>Kuzzle</b>, <b>Kumulos</b>

                </p>
            </div>
            <div className="bg-base-100 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-neutral font-semibold py-4 text-xl">What is the difference between javascript and NodeJS?</h1>
                <p className="text-neutral">
                    <span className="font-semibold">Node.js: </span> is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.<br />
                    On the other hjand javascript is a programing language by basically interacts with the browser deals with objects, function, methods etc.There are many frame works of it. Node js is one of the frameworks tyhat provides runtime support.
                </p>
            </div>
            <div className="bg-base-100 px-6 py-3 text-left max-w-5xl border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className="text-neutral font-semibold py-4 text-xl">How does NodeJS handle multiple requests at the same time?</h1>
                <p className="text-neutral">
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.<br />

                    Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.<br />

                    Node.js basically works on two concept

                    <ul className="list-disc ml-6">
                        <li> Asynchronous</li>
                        <li>Non-blocking I/O</li>

                    </ul>
                </p>
            </div>
        </div>

    )
}

export default Blogs