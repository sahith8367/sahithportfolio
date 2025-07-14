import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile1.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sahith Chintala
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
             <TypeAnimation
                sequence={[
                    'Front-End Developer', // Types 'Fullstack Developer'
                    1000, // Waits 1 second
                    'Programmer', // Deletes 'Fullstack Developer' and types 'App Developer'
                    1000, // Waits 1 second
                    'UI/UX Designer', // Deletes 'App Developer' and types 'UI/UX Designer'
                    1000, // Waits 1 second
                    'Coder', // Deletes 'UI/UX Designer' and types 'Coder'
                    1000, // Waits 1 second
                ]}
                wrapper="span" // You can use any HTML element here, or leave it as default "span"
                cursor={true} // Show the blinking cursor
                repeat={Infinity} // Repeat the animation indefinitely
                speed={1} // Typing speed (smaller number = faster)
                deletionSpeed={1} // Deletion speed (smaller number = faster)
                className="text-[#8245ec]" // Apply your custom styling
             />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Highly motivated and detail-oriented Computer Science Engineering student with a strong foundation in Data programming
            fundamentals (Java, Python, JavaScript). Eager to leverage 0-1 year of experience through internships and projects in both
            frontend and backend technologies to contribute to a dynamic organization. Proven ability to learn quickly, adapt to new
            challenges, and write clean, scalable code, with a passion for building quality software.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1N33O6gd3lwdhaG1xuQst8B2b2A7MJhx0/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-]105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 1px #8245ec, 0 0 1px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="sahith Chintala"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;