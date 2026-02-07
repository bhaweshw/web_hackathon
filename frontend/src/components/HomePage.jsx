
import axios from "axios";
import React, { useState, useRef } from "react";

const HomePage = () => {

   const [Startdate, setStartdate] = useState("");
  const [Enddate, setEnddate] = useState("");
  const [asteroids, setAsteroids] = useState([]);

  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    const el = scrollRef.current;
    if (!el) return;

    const startX = e.pageX;
    const scrollLeft = el.scrollLeft;

    const onMouseMove = (e) => {
      el.scrollLeft = scrollLeft - (e.pageX - startX);
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        "https://api.nasa.gov/neo/rest/v1/feed",
        {
          params: {
            start_date: Startdate,
            end_date: Enddate,
            api_key: "vlPCiJrbZFtzsvpdVcOV7hxYdAxiuKIkgWcvY2Qy",
          },
        }
      );

      const neoObject = res.data.near_earth_objects;
      const flattenedAsteroids = Object.values(neoObject).flat();
      setAsteroids(flattenedAsteroids);
    } catch (err) {
      console.error(err);
      alert("Invalid date range (max 7 days)");
    }
  };
  return (
    <div className="relative w-full h-screen">
      <img src="https://cdn.dribbble.com/userupload/3719111/file/original-b212e235c1c8199378f2dfb575011f56.jpg?resize=1504x1504&vertical=center" alt="logo" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />
      
      <div className='absolute inset-0 bg-black/50 bg-opacity-10 z-10'></div>
<div className="p-10 z-20 relative min-h-screen">
      <div className="max-w-md mx-auto space-y-4 text-white">
        <label>Start Date</label>
        <input
          type="date"
          value={Startdate}
          onChange={(e) => setStartdate(e.target.value)}
          className="w-full p-2 bg-transparent border rounded"
        />

        <label>End Date</label>
        <input
          type="date"
          value={Enddate}
          onChange={(e) => setEnddate(e.target.value)}
          className="w-full p-2 bg-transparent border rounded"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-white text-black py-2 rounded"
        >
          Search Asteroids
        </button>
      </div>

      <div className="h-screen w-full overflow-hidden mt-10">
        <div id="scroll-container"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          className="flex flex-nowrap overflow-x-auto text-white gap-12 p-10 cursor-grab active:cursor-grabbing select-none"
        >
          {asteroids.map((asteroid) => {
            const approach = asteroid.close_approach_data?.[0];

            return (
              <div
                key={asteroid.id}
                className="border bg-white/10 backdrop-blur-sm shrink-0 p-4 rounded w-64 h-64 flex flex-col justify-between"
              >
                <h1 className="font-bold">{asteroid.name}</h1>

                <h1>
                  Hazardous:{" "}
                  {asteroid.is_potentially_hazardous_asteroid ? "Yes " : "No "}
                </h1>

                {approach && (
                  <>
                    <h1>
                      Velocity:{" "}
                      {Number(
                        approach.relative_velocity.kilometers_per_hour
                      ).toFixed(2)}{" "}
                      km/h
                    </h1>

                    <h1>
                      Distance:{" "}
                      {Number(
                        approach.miss_distance.kilometers
                      ).toLocaleString()}{" "}
                      km
                    </h1>
                  </>
                )}

                <a
                  href={asteroid.nasa_jpl_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View Details
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>



       


    </div>
  )
}

export default HomePage

