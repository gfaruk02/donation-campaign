
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Donations from "../Donations/Donations";

const Home = () => {
  const donationsData = useLoaderData();
  const [donationsItem, setDonationsItem] = useState("");
  const [searchData, setSearchData] = useState(donationsData);

  const handleSearch = (e) => {
    if (e) {
      const dataFilter = donationsData.filter((item) =>
        item.category.toLowerCase().includes(donationsItem.toLowerCase())
      );
      setSearchData(dataFilter);
      e.preventDefault();
    } else {
      // Handle the case when you want to show all data
      setSearchData(donationsData);
    }
  };

  const resetSearch = () => {
    setSearchData(donationsData);
  };

  return (
    <div>
      <div className="hero min-h-screen -mt-24" style={{ backgroundImage: 'url(https://i.ibb.co/nzQ1w2C/Healthcare-14176.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-90 "></div>
                <div className="hero-content  text-neutral-content">
                    <div className=" text-[#0B0B0B]">
                        <h1 className=" pt-20 lg:pt-0 text-2xl md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>


                        <form >
                            <div className="relative w-full lg:w-6/12 lg:ml-32 mt-5 ">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required
                                    value={donationsItem}
                                    onChange={(e) => setDonationsItem(e.target.value)}
                                />
                                <button onClick={handleSearch} type="submit" className="text-white absolute right-1 bottom-1.5 bg-[#FF444A] hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>

      <button onClick={resetSearch}>Load All Data</button>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3 max-w-6xl pl-4 md:pl-0 mx-auto mt-6 pb-10">
                {
                    searchData?.map(item => <Donations key={item.id} item={item}> </Donations>)
                }
            </div>
    </div>
  );
};

export default Home;
