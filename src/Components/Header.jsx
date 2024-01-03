import React from "react";

const Header = () => {
  return (
    <section className="py-1 px-6">
      <div className="flex  justify-between items-center ">
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
    </section>
  );
};

export default Header;
