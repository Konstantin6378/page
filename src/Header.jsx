const Header = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex w-full items-start">
        <h2 className="font-extrabold text-[44px] mt-[41px] mb-[23px]">
          VIClouds.tech
        </h2>
      </div>
      <div className="flex flex-col justify-center w-full items-start bg-header-bg bg-no-repeat bg-contain h-[466px] max-h-screen">
        <h1 className="font-extrabold text-6xl max-w-[813px] mb-[30px]">
          Empowering Businesses with Innovative Tech Solutions
        </h1>
        <button className="hover:bg-red-600 active:bg-yellow-500 font-extrabold text-lg max-w-[184px] max-h-[54px] py-[15px] px-[34px] bg-[#F1576B] text-white rounded-full ml-3">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Header;
