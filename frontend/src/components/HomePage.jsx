
import axios from "axios";
import React, { useState, useRef } from "react";
import { RiBookmarkLine } from "@remixicon/react";
import { RiBookmarkFill } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {


  const Navigate = useNavigate();
    const [distance, setDistance] = useState(40);
    const [velocity, setVelocity] = useState(28);
    const [size, setSize] = useState(12);
    const [hazardFactor, setHazardFactor] = useState(20);
  const [Startdate, setStartdate] = useState("");
  const [Enddate, setEnddate] = useState("");
  const [asteroids, setAsteroids] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [calculation, setCalculation] = useState([]);
  const [riskScores, setRiskScores] = useState([]);
  const [asteroidDetails, setAsteroidDetails] = useState([]);

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
      console.log()
      const neoObject = res.data.near_earth_objects;
      const flattenedAsteroids = Object.values(neoObject).flat();
      setAsteroids(flattenedAsteroids);
    } catch (err) {
      console.error(err);
      alert("Invalid date range (max 7 days)");
    }
  };

const handleBookmark = (asteroid) => {
  setBookmark((prev) => {
    const exists = prev.find((a) => a.id === asteroid.id);
    if (exists) return prev;

    return [...prev, asteroid];
  });

 
  console.log(bookmark);
};

const handleCalculation = () => {
  {bookmark.map((asteroid) => {
    calculation.push((
      distance*asteroid.close_approach_data?.[0].miss_distance.kilometers +
      velocity*asteroid.close_approach_data?.[0].relative_velocity.kilometers_per_hour +
      size*asteroid.estimated_diameter.meters.estimated_diameter_max +
      hazardFactor*(asteroid.is_potentially_hazardous_asteroid ? 1*50000000 : 0))/20000000/(distance+velocity+size+hazardFactor)
    )
    setAsteroidDetails(prev => [...prev, asteroid.name]);
    ;})
  }
        
      setRiskScores(calculation.map(score => score.toFixed(4)));
};



  return (
    <div className=" w-full h-full bg-blue-600">

      {/* Fetching data */}
    <div className="w-full h-screen">

      <h1 className="text-white text-4xl font-bold text-center pt-10 z-20 relative">Search Near Earth Objects</h1>
             <img src="https://cdn.dribbble.com/userupload/3719111/file/original-b212e235c1c8199378f2dfb575011f56.jpg?resize=1504x1504&vertical=center" alt="logo" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />
      
      <div className='absolute inset-0 bg-black/50 bg-opacity-10 z-10 h-screen w-full'></div>
<div className="p-10 z-20 relative min-h-full">


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

      <div className="h-full w-full overflow-hidden mt-10">
        <div id="scroll-container "
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          className="flex flex-nowrap overflow-x-auto text-white gap-12 p-10 cursor-grab active:cursor-grabbing select-none"
        >
          {asteroids.map((asteroid) => {
            const approach = asteroid.close_approach_data?.[0];

            return (
              <div
                key={asteroid.id}
                className="relative border bg-white/10 backdrop-blur-sm shrink-0 p-4 rounded w-64 h-64 flex flex-col justify-between"
              >
                 <button
  className="h-10 w-10 absolute z-10 top-5 right-5"
  onClick={() => handleBookmark(asteroid)}
>
  {bookmark.some((a) => a.id === asteroid.id) ? (
    <RiBookmarkFill className="text-yellow-400" />
  ) : (
    <RiBookmarkLine />
  )}
</button>
                <h1 className="font-bold">{asteroid.name}</h1>

                <h1>
                  Hazardous:{" "}
                  {asteroid.is_potentially_hazardous_asteroid ? "1" : "0"}
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
    {/* Risk Score */}
    <div>
        <div className="relative min-h-screen w-full overflow-hidden">
      

      <img src="https://cdn.dribbble.com/userupload/41788994/file/original-cab35b2befce7e561b25f9801afb06af.gif" alt="logo" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />

      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>


      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold">Asteroid Tracker</h1>
        <div>
            <input type="text"
             placeholder="Weight of Distance"
                className="w-full mt-4 px-4 py-2 border-gray-900 border-2 rounded bg-blue-200 text-black" 
                onChange={(e)=>setDistance(e.target.value)}/>

                <input type="text"
             placeholder="Weight of Velocity"
                className="w-full mt-4 px-4 py-2 border-gray-900 border-2 rounded bg-blue-200 text-black" 
                
                onChange={(e)=>setVelocity(e.target.value)}/>
                <input type="text"
             placeholder="Weight of Size"
                className="w-full mt-4 px-4 py-2 border-gray-900 border-2 rounded bg-blue-200 text-black" 
                onChange={(e)=>setSize(e.target.value)}/>
                <input type="text"
             placeholder="Weight of Hazard Factor"
                className="w-full mt-4 px-4 py-2 border-gray-900 border-2 rounded bg-blue-200 text-black" 
                onChange={(e)=>setHazardFactor(e.target.value)}/>


            <button
              className="w-full mt-4 px-4 py-2 bg-white text-black rounded" onClick={handleCalculation}>Analyze                               
            </button>
        </div>
        


      </div>

    </div>
    </div>
    {/* Risk Score Table */}

    <div className="relative h-screen w-full flex justify-center bg-black text-white overflow-hidden">
       <img src="https://cdn.dribbble.com/userupload/20786890/file/original-c2046c040c2d6bb443f0137f5d169c5b.gif" alt="logo" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />
      
      <div className='absolute inset-0 bg-black/50 bg-opacity-10 z-10 h-screen w-full'></div>
<div className="p-10 z-20 relative min-h-full flex-col items-center gap-10">
       <h1 className="text-white w-full font-bold text-4xl h-40 text-center underline">Risk Score Table</h1>

    <div className="flex mt-30">
      {calculation.map((score, index) => {

      return (
        <div className="m-4 h-40 w-40 bg-black text-white font-bold  p-2 rounded">
          <h1>Asteroid: {asteroidDetails[index]}</h1>
          <h1>Risk Score: {riskScores[index]}</h1>
        </div>
      )
    })}
    </div>
    </div>
    </div>
    {/* Alert Dashboard */}


    </div>
  )
}

export default HomePage

