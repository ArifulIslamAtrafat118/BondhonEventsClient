import React from "react";

function FeatureSection() {
  return (
    <section className="relative  pt-20 pb-72 md:pb-52 px-4 bg-gradient-to-t from-[#010313] via-gray-200  to-gray-100 dark:from-[#000000de] dark:via-gray-900  dark:to-gray-700 overflow-hidden">
      {/* Gradient Background Image */}
      <img
        src="https://web.programming-hero.com/assets/curve-Bvwi6Kir.png"
        alt="gradient bg"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12">
          Why Choose BondhonEvents?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-6 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              🎯 Easy Event Creation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Organizers can effortlessly create, update, and manage events with
              an intuitive interface.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-6 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              🤝 Volunteer Network
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Connect with passionate volunteers and grow a thriving community
              with every event.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-6 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              🔔 Real-Time Notifications
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Stay updated with instant alerts about new events, updates, and
              joined participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
