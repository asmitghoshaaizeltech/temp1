import React from "react";

const HelpContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-300 to-blue-700 p-8">
      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Navigation */}
        <nav className="p-6 flex items-center justify-between">
          {/* Logo */}

          {/* Menu Items */}
          <div className="flex gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              ABOUT
            </a>
            <a
              href="#home"
              className="text-gray-900 border-b-2 border-yellow-400"
            >
              HOME
            </a>
            <a href="#product" className="text-gray-600 hover:text-gray-900">
              PRODUCT
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              PRICING
            </a>
          </div>

          {/* Menu Button */}
          <button className="p-2 rounded-lg bg-pink-100">
            <div className="space-y-1">
              <div className="w-4 h-0.5 bg-gray-600"></div>
              <div className="w-4 h-0.5 bg-gray-600"></div>
              <div className="w-4 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </nav>

        {/* Content */}
        <div className="p-8 flex items-center gap-12">
          {/* Left Side - Illustration */}
          <div className="relative w-1/2">
            <div className="aspect-square bg-purple-900 rounded-full p-8">
              <div className="relative h-full w-full bg-white rounded-3xl overflow-hidden shadow-lg">
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white text-sm"></div>
                    <div className="w-32 h-6 bg-yellow-100 rounded-full"></div>
                  </div>
                </div>

                {/* Support Person Illustration */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-24 bg-violet-500 rounded-t-full"></div>
                </div>

                {/* Decorative Shapes */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-pink-400 rounded-lg"></div>
                <div className="absolute bottom-12 right-8 w-12 h-2 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-violet-600 mb-6">
              Assistance Support
            </h1>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet
            </p>
            <button className="px-6 py-3 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition-colors">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpContent;
