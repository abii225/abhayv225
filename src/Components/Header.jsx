import React from "react";

const Header = () => {
  return (
    <header className="py-1">
      <div className="container mx-auto">
        <div className="flex w-[100%]  justify-between items-center ">
          {/* logo */}
          <a href="#">
            <img
              className="h-[80px]"
              src="https://i.ibb.co/KzywQ0f/logo1.png"
              alt="Logo"
            />
          </a>
          <button className="btn btn-sm">Resume</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
