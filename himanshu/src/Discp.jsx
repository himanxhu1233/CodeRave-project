// import React from "react";

// const Discp = () => {
//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h2 className="card-title mb-4">Add borders</h2>
//               <p className="card-text">
//                 Or, keep it light and add a border for some added definition to
//                 the boundaries of your content. Be sure to look under the hood
//                 at the source HTML here as we've adjusted the alignment and
//                 sizing of both column's content for equal-height.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discp;
import React from "react";

const Discp = () => {
  return (
    <div className="my-2 ms-4 me-4 ">
      <div className="row">
        <div className="col-md-12">
          <h2 className="mb-4">About this course</h2>
          <p className="mb-4">A Quick and Easy Intro to Python Programming</p>
          <div className="row">
            <div className="col-md-4">
              <h5>By the numbers</h5>
              <ul className="list-unstyled">
                <li>Skill level: Beginner Level</li>
                <li>Students: 939,100</li>
                <li>Languages: English</li>
                <li>Captions: Yes</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Lectures</h5>
              <ul className="list-unstyled">
                <li>22 lectures</li>
                <li>1 total hour</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Features</h5>
              <ul className="list-unstyled">
                <li>Available on iOS and Android</li>
                <li>Coding exercises</li>
              </ul>
            </div>
          </div>
          <h5 className="mt-4">Description</h5>
          <p className="justify-between">
            Are you interested in becoming a programmer? Perhaps Python has
            caught your attention? If you're looking for a quick brush-up or
            starting to learn Python for the first time, you're in the right
            place!
          </p>
          <p className="justify-between">
            Let's begin our journey with one of the most beginner-friendly
            programming languages available today. Don't worry if you haven't
            coded before. By the end of this course, you'll be a Python pro!
          </p>
          <p className="justify-between">
            Python is an amazing and user-friendly language to learn and use.
            It's fun and can be adapted for both small and large projects.
            Python significantly reduces development time, and it's generally
            faster to write code in Python compared to other languages.
          </p>
          <p className="justify-between">
            This course will provide a comprehensive understanding of the key
            concepts of Python programming. You'll become a skilled Python
            programmer in no time!
          </p>
          <p className="justify-between">
            This course serves as a one-stop-shop, covering everything you need
            to know to start with Python, and even includes some additional
            incentives. We'll begin by covering the basics of Python, including
            strings, variables, and an introduction to data types. From there,
            we'll move on to loops and conditions in Python. Later, we'll
            explore file manipulation and functions. By the end of the course,
            you'll have a solid foundation in Python.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discp;
