// import React, { useState, useRef, useEffect } from 'react';

// function SideBar() {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [watched, setWatched] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const videoRef = useRef(null);
 

//   // yaha pe backed for videos connet karnaF
//   const videos = [
//     { src: 'video1.mp4', duration: 213, title: 'Video 1', progress: 0 },
//     { src: 'video2.mp4', duration: 252, title: 'Video 2', progress: 0 },
//     { src: 'video3.mp4', duration: 165, title: 'Video 3', progress: 0 },
//   ];

//   useEffect(() => {
//     const handleKeydown = (event) => {
//       if (event.key === 'PrintScreen' || event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
//         event.preventDefault();
//         alert('Screenshot and screen recording are not allowed on this page.');
//       }
//     };

//     document.addEventListener('keydown', handleKeydown);
//     return () => document.removeEventListener('keydown', handleKeydown);
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.addEventListener('ended', () => {
//         setWatched(true);
//         videoRef.current.controls = false;
//         videoRef.current.classList.add('disabled');
//         alert('You have watched the video completely. You can no longer play it again.');
//       });

//       videoRef.current.addEventListener('click', () => {
//         if (watched) {
//           alert('You have already watched the video completely and can no longer play it again.');
//         }
//       });

//       videoRef.current.addEventListener('timeupdate', () => {
//         setCurrentTime(videoRef.current.currentTime);
//         videos[currentVideoIndex].progress = (videoRef.current.currentTime / videos[currentVideoIndex].duration) * 100;
//       });
//     }
//   }, [watched, currentVideoIndex, videos]);


//   //play once 
//   const handleVideoLinkClick = (index) => {
//     if (!watched || index !== currentVideoIndex) {
//       setCurrentVideoIndex(index);
//       setWatched(false);
//       setCurrentTime(0);
//       videos[currentVideoIndex].progress = 0;
//     } else {
//       alert('You have already watched the video completely and can no longer play it again.');
//     }
//   };

//   const formatDuration = (duration) => {
//     const minutes = Math.floor(duration / 60);
//     const seconds = Math.floor(duration % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };

//   const formatCurrentTime = () => {
//     const minutes = Math.floor(currentTime / 60);
//     const seconds = Math.floor(currentTime % 60);
//     return` ${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="container-fluid my-4">
//       <div className="row">
//         <div className="col-md-8 mb-4">
//           <div className="embed-responsive embed-responsive-16by9">
//             <video src="./video111.mp4" id="video" className="embed-responsive-item" controls ref={videoRef}>


            

//             </video>
//           </div>
//           <div className="text-center">
//             {/* {formatCurrentTime()} / {formatDuration(videos[currentVideoIndex].duration)} */}
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title">Cource Content :</h2>
//               <p className="card-text">

//                 {/* =============================================================== */}
//                 Duration: {formatDuration(videos[currentVideoIndex].duration)}
//               </p>
//               <ul className="list-group list-group-flush">
//                 {videos.map((video, index) => (
//                   <li
//                     key={index}
//                     className="list-group-item d-flex justify-content-between align-items-center"
//                     onClick={() => handleVideoLinkClick(index)}
//                   >
//                     {video.title}
//                     <span className="badge badge-primary badge-pill">
//                       {Math.round(video.progress)}%
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideBar;

import React, { useState, useRef, useEffect } from 'react';

function SideBar() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [watched, setWatched] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);

  // yaha pe backed for videos connet karnaF
  const videos = [
    { src: 'video1.mp4', duration: 213, title: 'Video 1', progress: 0, description: 'This is the first video in the course.' },
    { src: 'video2.mp4', duration: 252, title: 'Video 2', progress: 0, description: 'This is the second video in the course.' },
    { src: 'video3.mp4', duration: 165, title: 'Video 3', progress: 0, description: 'This is the third video in the course.' },
    { src: 'video1.mp4', duration: 213, title: 'Video 4', progress: 0, description: 'This is the first video in the course.' },
    { src: 'video2.mp4', duration: 252, title: 'Video 5', progress: 0, description: 'This is the second video in the course.' },
    { src: 'video3.mp4', duration: 165, title: 'Video 6', progress: 0, description: 'This is the third video in the course.' },
    { src: 'video1.mp4', duration: 213, title: 'Video 7', progress: 0, description: 'This is the first video in the course.' },
    { src: 'video2.mp4', duration: 252, title: 'Video 8', progress: 0, description: 'This is the second video in the course.' },
    { src: 'video3.mp4', duration: 165, title: 'Video 9', progress: 0, description: 'This is the third video in the course.' },
    
  ];

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'PrintScreen' || event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
        event.preventDefault();
        alert('Screenshot and screen recording are not allowed on this page.');
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', () => {
        setWatched(true);
        videoRef.current.controls = false;
        videoRef.current.classList.add('disabled');
        alert('You have watched the video completely. You can no longer play it again.');
      });

      videoRef.current.addEventListener('click', () => {
        if (watched) {
          alert('You have already watched the video completely and can no longer play it again.');
        }
      });

      videoRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(videoRef.current.currentTime);
        videos[currentVideoIndex].progress = (videoRef.current.currentTime / videos[currentVideoIndex].duration) * 100;
      });
    }
  }, [watched, currentVideoIndex, videos]);

  //play once
  const handleVideoLinkClick = (index) => {
    if (!watched || index !== currentVideoIndex) {
      setCurrentVideoIndex(index);
      setWatched(false);
      setCurrentTime(0);
      videos[currentVideoIndex].progress = 0;
    } else {
      alert('You have already watched the video completely and can no longer play it again.');
    }
  };

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatCurrentTime = () => {
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    return` ${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="embed-responsive embed-responsive-16by9">

          {/* this is the video section */}
           <div className='black_box'>

           </div>


          </div>
          {/* <div className="text-center">
            {formatCurrentTime()} / {formatDuration(videos[currentVideoIndex].duration)}
          </div> */}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Course Content</h2>
              <p className="card-text">{videos[currentVideoIndex].description}</p>
              <div className="card-text">
                <strong>Duration:</strong> {formatDuration(videos[currentVideoIndex].duration)}
              </div>
              <ul className="list-group list-group-flush">
                {videos.map((video, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                    onClick={() => handleVideoLinkClick(index)}
                  >
                    {video.title}
                    <span className="badge badge-primary per badge-pill">
                      {Math.round(video.progress)}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;