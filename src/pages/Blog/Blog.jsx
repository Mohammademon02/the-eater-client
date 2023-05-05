import React from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {

    const ref = React.createRef();

    return (
        <div ref={ref} className='container'>
            <h1 className='mt-5'>1) What is the differences between uncontrolled and controlled components ?</h1>
            <p className='mt-3' style={{ textAlign: 'justify' }}>Answer : Controlled Component : In the controlled component, the input of the form element is handled by the component rather than the DOM. Controlled components have the functions that govern the data, which passes to them on every onChange event. Here, the changeable (mutable) state is kept inside the state property and updated only with the setState() method.
                Uncontrolled Component: Uncontrolled components are much similar to the traditional HTML form inputs. The DOM is itself responsible for handling the form data. Here, the elements of HTML maintain their state, which will update when the value of input changes. For writing an uncontrolled component, you have to use a ref to get form values from the DOM. In other words, it is not important to write an event handler for updating of every state.</p>

            <h1 className='mt-3'>2) How to validate React props using PropTypes ?</h1>
            <p className='mt-3' style={{ textAlign: 'justify' }}>Answer : React PropTypes is a mechanism that adds type-checking to the props of the React applications’ components. Prop types ensure that the data of the correct type passes and receives in the components. We can configure the type definitions for each prop, and whenever a prop is passed to React components, it will be type-checked against its type definition. Whenever an invalid type value is passed, a warning pops up on the JavaScript console, which needs to be resolved. So check your JavaScript console frequently!</p>

            <h1 className='mt-3'>3) What are the difference between nodejs and express js ?</h1>
            <p className='mt-3' style={{ textAlign: 'justify' }}>Answer : Node.js is used to build an input-output, server-side, event-driven app. The best use of the Node.js framework is to create a web server or a chat app. Express.js Express.js is used to create web-apps using principles and approaches of Node.js. Express.js can also be used to create APIs in Node.js.
            </p>

            <h1 className='mt-3'>4) What is a custom hook, and why will you create a custom hook ?</h1>
            <p className='mt-3' style={{ textAlign: 'justify' }}>Answer : A custom hook in React.js is a user-defined hook that builds on one or more default hooks. A custom hook enables you to encapsulate functionality into a reusable hook. For example, say you want to conditionally render a component based on the window’s screen size. JavaScript lets you add a resize event listener to the window object so you can run some logic whenever a window is resized. You can create a custom hook called useScreenSize that will detect changes in screen size and return the updated screen size.
            </p>
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button className='btn btn-success' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
        </div>
    );
};

export default Blog;