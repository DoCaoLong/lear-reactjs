import React from "react";

const CardTailwind = () => {
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          className="block w-full h-full object-cover rounded-lg"
          src="https://cms-assets.tutsplus.com/uploads/users/30/posts/33545/preview_image/tailwind-pre.png"
          alt=""
        />
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-[32px]">
          <div className="flex items-center gap-x-3">
            <img
              className="w-[30px] h-[30px] rounded-full object-cover flex-shrink-0"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900"
              alt=""
            />
            <span className="font-light text-base text-[#333]">@LongDev</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="/heart.svg" alt="heart" />
            <span>256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Card Tailwind</h3>
          <span className="text-lg font-bold text-transparent bg-clip-text bg-primary-gradient">
            12,000 PSL
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
