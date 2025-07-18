import React from "react";

function Newsletter() {
  return (
    <section className="bg-[#010313] dark:bg-[#000000de] w-full ">
      <div 
        className="relative mx-8 md:mx-10  max-w-7xl xl:mx-auto  
        py-5 md:py-10 lg:py-20 px-6 sm:px-8 md:px-10
        bg-gradient-to-br from-[#0D9488] to-[#155e75] dark:from-white/10 backdrop-blur-xl text-white overflow-hidden rounded-xl shadow-xl  
        my-[-2px] mt-[-16rem] md:mt-[-11rem] 
         hover:scale-102 transition-all duration-300 "
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            🌟 Subscribe to Our Newsletter
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Be the first to know about upcoming events, donation drives,
            meet-ups, and more.
          </p>

          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full sm:w-[350px] px-5 py-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-white/40 shadow-md"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-[#0D9488] hover:bg-gray-200 font-semibold rounded-md transition-all shadow-md hover:scale-105"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-white/80 mt-4">
            No spam, just meaningful updates from BondhonEvents.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
