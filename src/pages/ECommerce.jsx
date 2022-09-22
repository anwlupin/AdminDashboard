import React from "react";
import { Button, BarChart, Sparkline } from "../components";
import { colors, icons, earningConfig } from "../config";
import dummy from "../config/dummy";

const ECommerce = () => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-center flex-col">
        {/* ECommerce Banner */}
        <div className="w-full h-44 rounded-xl p-8 bg-hero-pattern bg-no-repeat bg-cover bg-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Earnings</p>
              <p className="text-2xl">${dummy.earning.total}</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              bgColor={colors.buttonBlue}
              color="white"
              borderRadius="10px"
              text="Download"
              size="md"
            />
          </div>
        </div>

        {/* Earning Stats */}
        <div className="flex flex-wrap justify-center items-center gap-1 m-3">
          {earningConfig.stats.map((item) => (
            <div
              key={item.name}
              className="md:w-56 p-4 rounded-2xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg capitalize"
            >
              <button
                className="p-4 opacity-0.9 rounded-full text-2xl hover:drop-shadow-xl"
                type="button"
                style={{
                  color: item.style.iconColor,
                  backgroundColor: item.style.iconBg,
                }}
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                  {dummy.earning[item.name].amount}
                </span>
                <span className={`ml-2 text-sm text-${item.style.pcColor}`}>
                  {dummy.earning[item.name].percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Updates */}
      <div className="flex flex-wrap justify-center gap-10">
        <div className="m-3 p-4 rounded-2xl w-9/12 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>{icons.dot()}</span>
                <span>Budget</span>
              </p>
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>{icons.dot()}</span>
                <span>Expense</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div className="m-4 pr-10 border-r-1 border-color">
              <div>
                <p>
                  <span className="font-semibold text-3xl">
                    ${dummy.earning.budget}
                  </span>
                  <span className="ml-3 p-1.5 rounded-full text-xs text-white bg-green-400 cursor-pointer hover:drop-shadow-xl">
                    {dummy.earning.percentage}
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="font-semibold text-3xl">
                    ${dummy.earning.expense}
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>

              <div className="mt-5">
                <Sparkline />
              </div>
            </div>
            <div>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECommerce;
