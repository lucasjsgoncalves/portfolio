import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item) => {
            let bgColor = "";
            let textColor = "";
            if (item === "Power BI") {
              bgColor = "bg-orange-600";
              textColor = "text-white";
            }
            if (item === "MySQL 🐬") {
              bgColor = "bg-sky-600";
              textColor = "text-white";
            }
            if (item === "Python") {
              bgColor = "bg-yellow-400";
              textColor = "text-black";
            }
            if (item === "Pandas") {
              bgColor = "bg-purple-900";
              textColor = "text-white";
            }
            if (item === "scikit-learn") {
              bgColor = "bg-fuchsia-200";
              textColor = "text-black";
            }

            return (
              <span
                className={`inline-block px-2 ${textColor} py-1 font-semibold border-2 border-stone-900 dark:border-white ${bgColor} rounded-md`}
              >
                {item}
              </span>
            );
          })}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
