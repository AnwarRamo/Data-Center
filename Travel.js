import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import Btn2 from "../../components/user/learnBtn";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TripService } from "../../api/services/trip.service";
import hero from "../../assets/images/hero.jpg";

export const TripsPage = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await TripService.getAllTrips();
        setTrips(response);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load trips");
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="bg-[#f8fafc] font-poppins mt-20">
      <NavBar />

      {/* Hero Section */}
      <div
        className="relative h-[500px] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
        <div className="z-10 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-md mb-6">
            Your Gateway to Discover the Beauty of Syria
          </h1>
          <button
            onClick={() => navigate("/trip")}
            className="bg-gradient-to-r from-[#115d5a] to-[#E7C873] hover:from-[#E7C873] hover:to-[#115d5a] text-white py-3 px-8 rounded-lg shadow-md text-lg font-medium transition duration-300 animate-bounce"
          >
            Explore Now
          </button>
        </div>
      </div>

      {/* Trips Showcase */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center text-[#115d5a] mb-10">
          Available Trips
        </h2>
        
        {loading ? (
          <div className="text-center">Loading trips...</div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="relative">
                  <img
                    src={trip.images[0]}
                    alt={trip.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{trip.title}</h3>
                    <div className="flex items-center mt-1">
                      <FaMapMarkerAlt className="mr-2" />
                      <p className="text-sm">{trip.destination}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-500">{trip.description}</p>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-[#115d5a]">Activities:</h4>
                    <ul className="list-disc list-inside text-gray-500">
                      {trip.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-[#115d5a]">
                      ${trip.price}
                    </span>
                    <Btn2 />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TripsPage;