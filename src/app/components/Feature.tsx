import React from "react";


const FeatureSection = () => {
  return (
    <section className="py-12 bg-white">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          What makes our brand different
        </h2>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12 text-center">
        {/* Feature 1 */}
        <FeatureItem
          icon=""
          title="Next day as standard"
          discription="Order before 3pm and get your order the next day as standard"
        />

        {/* Feature 2 */}
        <FeatureItem
          icon=''
          title="Made by true artisans"
          discription="Handmade crafted goods made with real passion and craftsmanship"
        
        />

        {/* Feature 3 */}
        <FeatureItem
          icon=""
          title="Unbeatable prices"
          discription="For our materials and quality you wont find better prices anywhere"
        />

        {/* Feature 4 */}
        <FeatureItem
          icon=""
          title="Recycled packaging"
          discription ="We use 100% recycled packaging to ensure our footprint is manageable"
        />
      </div>
    </section>
  );
};

//FeatureItem Component
const FeatureItem = ({ icon, title, discription }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-gray-700">{title}</h3>
     <p className="text-gray-500 text-sm">{discription}</p>
   </div>
  );
};

export default FeatureSection;
