import Footer from "../components/Footer"

const AboutPage = () => {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
        <section className="bg-neutral-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate__animated animate__fadeInLeft">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Your Daily Dose of Entertainment
                </h2>
                <div className="mt-6 space-y-6 text-gray-600">
                  <p className="text-lg">
                    Founded in 2023, we're passionate about bringing you the
                    latest and most exciting news from the world of
                    entertainment, movies, TV shows, gaming, and pop culture.
                  </p>
                  <p className="text-lg">
                    Our team of dedicated writers and pop culture enthusiasts
                    work around the clock to ensure you never miss out on
                    trending stories, exclusive interviews, and in-depth
                    analyses.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-lg text-gray-600">
                        Expert Reviews &amp; Analysis
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-lg text-gray-600">
                        Breaking Entertainment News
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-lg text-gray-600">
                        Exclusive Interviews &amp; Features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:ml-8 animate__animated animate__fadeInRight">
                <div className="bg-neutral-900 p-8 rounded-lg shadow-xl">
                  <div className="space-y-6 text-white">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 text-indigo-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7h2v2h-2v-2zm0-8h2v6h-2V5z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold">Our Mission</h4>
                        <p className="mt-2 text-gray-300">
                          To be your trusted source for everything pop culture,
                          delivering high-quality content that informs and
                          entertains.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 text-indigo-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM10.622 8.415l4.879 3.252a.4.4 0 010 .666l-4.879 3.252a.4.4 0 01-.622-.333V8.748a.4.4 0 01.622-.333z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold">Our Vision</h4>
                        <p className="mt-2 text-gray-300">
                          To build a vibrant community of pop culture
                          enthusiasts who share our passion for entertainment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center animate__animated animate__fadeInUp"></div>
          </div>
        </section>
        <section className="bg-neutral-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Explore Our Categories
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Dive into your favorite entertainment topics
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-neutral-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                <div className="text-indigo-500 mb-4">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 4v16h10V4H7zm-2-2h14c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm7 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Movies</h3>
                <p className="text-gray-400">
                  Reviews, trailers, news, and analysis of the latest
                  blockbusters and indie films.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="text-indigo-500 mb-4">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">TV Shows</h3>
                <p className="text-gray-400">
                  Episode recaps, series reviews, and the latest streaming
                  content updates.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="text-indigo-500 mb-4">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Gaming</h3>
                <p className="text-gray-400">
                  Game reviews, industry news, and exclusive gaming content
                  coverage.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                <div className="text-indigo-500 mb-4">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Celebrity News
                </h3>
                <p className="text-gray-400">
                  Latest updates, interviews, and behind-the-scenes content from
                  Hollywood.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="text-indigo-500 mb-4">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Comics &amp; Anime
                </h3>
                <p className="text-gray-400">
                  Comic book releases, anime reviews, and manga coverage.
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="text-indigo-500 mb-4">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Streaming</h3>
                <p className="text-gray-400">
                  Latest updates from Netflix, Disney+, and other streaming
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
