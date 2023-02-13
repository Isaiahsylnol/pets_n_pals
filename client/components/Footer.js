import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full bg-[#ebdcb5] justify-center">
      <div className="grid grid-rows-2 gap-y-8 mt-8">
        <h3 className="flex justify-center text-3xl font-semibold mt-8">
          Subscribe to our Newsletter
        </h3>
        <form className="flex items-center justify-center gap-3">
          <input type="email" name="email" className="w-60 p-2" />
          <input
            type="submit"
            value="Submit"
            className="bg-slate-300 w-32 p-2 cursor-pointer"
          />
        </form>
        <div className="flex items-center mt-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 text-xl">
            <div>
              <a href="#">Contact</a>
            </div>
            <div>
              <a href="#">About Us</a>
            </div>
            <div>
              <a href="#">Careers</a>
            </div>
            <div>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
        <a
          className="flex justify-center p-4"
          href="#"
          rel="noopener noreferrer"
        >
          © 2020 Copyright: Isaiah Sylvester
        </a>
      </div>
    </footer>
  );
};

export default Footer;
