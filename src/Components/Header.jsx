import React from "react";

const Header = () => {
  const resumeDownload = (e) => {
    // e.preventDefault()

    // Create a temporary link
    e.preventDefault(); // Prevent the default link behavior
    window.open(
      "https://drive.google.com/file/d/1sEu2GftHoAUtZKRPvlZRp3fCggvZdwg3/view?usp=sharing",
      "_blank"
    );
    // Create a temporary link
    let link = document.createElement("a");

    // Set the link's attributes
    // D:\MASAI\abhayv225\src\assets\Abhay-v-Resume.pdf
    link.href = "./assets/Abhay-v-Resume"; // Replace with the actual path to your resume PDF
    link.target = "_blank";
    link.download = "Abhay-v-Resume"; // Replace with the desired file name

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };
  return (
    <section className="py-1 px-6 bg-body">
      <div className="flex  justify-between items-center ">
        {/* logo */}
        <a href="#about">
          <img
            className="h-[80px]"
            src="https://i.ibb.co/KzywQ0f/logo1.png"
            alt="Logo"
          />
        </a>
        <button
          className="btn btn-sm md:btn-lg text-white"
          onClick={(e) => resumeDownload(e)}
        >
          Resume
        </button>
      </div>
    </section>
  );
};

export default Header;
