import React, { useEffect } from "react";
import ScreenPath from "../../components/ScreenPath";
import Cards from "../../components/Cards";
const Dashboard = () => {
  useEffect(() => {
    document.title = "Envoy | Home";
  }, []);

  return (
    <div className="flex flex-col flex-auto text-black">
      <div className="flex">
        <ScreenPath currentPath="Dashboard" />
      </div>
      <div className="flex flex-wrap mt-1 flex-row w-[90%] mx-[20px]">
        <Cards
          cardIcon="bg-total_user bg-contain bg-no-repeat h-[60px] w-[60px] mt-5 mx-auto"
          subtitle="Total Users"
          total="104"
          NavigateTo="/users"
        />
        <Cards
          cardIcon="bg-total_post bg-contain bg-no-repeat h-[60px] w-[60px] mt-5 mx-auto"
          subtitle="Total Post for University"
          total="65"
          NavigateTo="/posts/university"
        />
        <Cards
          cardIcon="bg-total_cea bg-contain bg-no-repeat h-[60px] w-[60px] mt-5 mx-auto"
          subtitle="Total Post for CEA"
          total="21"
          NavigateTo="/posts/cea"
        />
        <Cards
          cardIcon="bg-total_citc bg-contain bg-no-repeat h-[60px] w-[60px] mt-5 mx-auto"
          subtitle="Total Post for CITC"
          total="76"
          NavigateTo="/posts/citc"
        />
        <Cards
          cardIcon="bg-total_csm bg-contain bg-no-repeat h-[60px] w-[60px] mt-5 mx-auto"
          subtitle="Total Post for CSM"
          total="28"
          NavigateTo="/posts/csm"
        />
        <Cards
          cardIcon="bg-total_cste bg-contain bg-no-repeat h-[60px] w-[60px] mt-5 mx-auto"
          subtitle="Total Post for CSTE"
          total="17"
          NavigateTo="/posts/cste"
        />
        <Cards
          cardIcon="bg-total_cot bg-contain bg-no-repeat h-[60px] w-[60px] mt-5 mx-auto"
          subtitle="Total Post for COT"
          total="23"
          NavigateTo="/posts/cot"
        />
      </div>
    </div>
  );
};

export default Dashboard;