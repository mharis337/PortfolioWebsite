import profileImage from '../images/20190330_154453.jpg';
const AboutMe = ({ scrollToProjects }) => {
    return (
        <div className="bg-[#D7D7C4] relative overflow-hidden min-h-screen">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#B39774] to-[#D8C7A5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>
    
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
              <div className="flex justify-center mb-8">
                <img
                  src={profileImage}
                  alt="Muhammad Haris"
                  className="w-100 h-100 rounded-full shadow-lg border-4 border-[#B39774] object-cover"
                />
              </div>
    
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Hi, I'm Muhammad Haris</h1>
              <p className="mt-8 text-lg text-gray-700 sm:text-xl">Software Developer passionate about building efficient, data-driven applications and leveraging machine learning to solve real-world problems.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
            onClick={scrollToProjects}
            className="rounded-md bg-[#B39774] px-4 py-2 text-white font-semibold shadow-md hover:bg-[#A67E5B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B39774]"
          >
            View My Projects
          </button>
                <a href="mailto:muhammadharis337@gmail.com" className="text-sm font-semibold text-gray-900">
                  Contact Me <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
    
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#B39774] to-[#D8C7A5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>
          </div>
        </div>
      );
  };
  
  export default AboutMe;