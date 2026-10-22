function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-6 sm:px-10">

        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Hero Text */}
          <div>
            <p className="text-orange-600 font-semibold mb-4">
              Welcome to Cafe FM
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-stone-800">
              Good Food.
              <br />
              Good Mood.
            </h1>

            <p className="mt-6 text-lg text-stone-600 max-w-lg">
              Delicious food, warm moments, and a place to enjoy every bite.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition">
                Explore Menu
              </button>

              <button className="px-6 py-3 rounded-xl border border-orange-500 text-orange-600 hover:bg-orange-50 transition">
                Book a Table
              </button>

            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
         <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukiRMrL0wqDj8ZCGZbSRfj_6r4J2VBjTB0pdbLNwGFj6qy8kZxpItdh8&s=10"
  alt="Delicious food"
  className="w-full h-[400px] object-cover rounded-2xl"
/>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;