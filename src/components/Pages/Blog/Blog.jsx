import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='w-9/12 mx-auto my-16'>
            <div>
                <h1 className='text-2xl'>Q:1 <br />What are the different ways to manage a state in a React application?</h1>
                <p>1. https://used-products-resale-server-pied.vercel.app/ state</p>
                <p>2. URL state</p>
                <p>3. Server state</p>
                <p>4. Global state</p>
            </div>
            <div>
                <h1 className='text-2xl'>Q:2 <br />How does prototypical inheritance work?</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div>
                <h1 className='text-2xl'>Q:3 <br />What is a unit test? Why should we write unit tests?</h1>
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div>
                <h1 className='text-2xl'>Q:4 <br />React vs. Angular vs. Vue?</h1>
                <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                <table className='btable'>
                    <tr className='btr'>
                        <th className='bth'>React</th>
                        <th className='bth'>Angular</th>
                        <th className='bth'>Vue</th>
                    </tr>
                    <tr className='btr'>
                        <td className='btd'>React is a JavaScript library</td>
                        <td className='btd'>Angular is a front-end framework</td>
                        <td className='btd'> Vue. js enables writing with JSX, but the components are written with HTML templates</td>
                    </tr>
                    <tr className='btr'>
                        <td className='btd'>React uses one-way data binding and virtual DOM</td>
                        <td className='btd'>Angular uses two-way data binding and real DOM</td>
                        <td className='btd'>Vue provides higher customizability and hence is easier to learn than Angular or React.</td>
                    </tr>
                    <tr className='btr'>
                        <td className='btd'>React requires solid JavaScript skills</td>
                        <td className='btd'>Angular is Lower than React</td>
                        <td className='btd'>Vue. js is more oriented to novice developers.</td>
                    </tr>
                </table>
            </div>
        </div>

    );
};

export default Blog;