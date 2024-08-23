"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavDropDown from "../shared/NavDropDown";
import { Button } from "../ui/button";
import { BsFillAirplaneFill } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import Mail from "react-icons/md"; // Ensure to import the Mail icon
import Phone from "react-icons/fa"; // Ensure to import the Phone icon
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = {
    airportRuns: {
      title: "Airport",
      runs: [
        { name: "Gatwick Airport", icon: <BsFillAirplaneFill /> },
        { name: "Heathrow Airport", icon: <BsFillAirplaneFill /> },
        { name: "Birmingham Airport", icon: <BsFillAirplaneFill /> },
        { name: "Manchester Airport", icon: <BsFillAirplaneFill /> },
        { name: "Stansted Airport", icon: <BsFillAirplaneFill /> },
        { name: "Luton Airport", icon: <BsFillAirplaneFill /> },
        { name: "Bristol Airport", icon: <BsFillAirplaneFill /> },
        { name: "Edinburgh Airport", icon: <BsFillAirplaneFill /> },
        { name: "Glasgow Airport", icon: <BsFillAirplaneFill /> },
        { name: "London City Airport", icon: <BsFillAirplaneFill /> },
      ],
    },
  };

  const data_1 = {
    airportRuns: {
      title: "Services",
      runs: [
        { name: "Gatwick Airport", icon: <BsFillAirplaneFill /> },
        { name: "Heathrow Airport", icon: <BsFillAirplaneFill /> },
        { name: "Birmingham Airport", icon: <BsFillAirplaneFill /> },
        { name: "Manchester Airport", icon: <BsFillAirplaneFill /> },
        { name: "Stansted Airport", icon: <BsFillAirplaneFill /> },
        { name: "Luton Airport", icon: <BsFillAirplaneFill /> },
        { name: "Bristol Airport", icon: <BsFillAirplaneFill /> },
        { name: "Edinburgh Airport", icon: <BsFillAirplaneFill /> },
        { name: "Glasgow Airport", icon: <BsFillAirplaneFill /> },
        { name: "London City Airport", icon: <BsFillAirplaneFill /> },
      ],
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header Section with Contact Information */}
      <div className="bg-orange-600">
        <div className="container flex justify-end py-2">
          <div className="flex gap-2">
            <p className="flex gap-1 text-white text-sm font-meduim ml-[-20%]">
              <FaEnvelope className="text-sm text-white mt-[3px]" />{" "}
              <Link href="mailto:xyz@gmail.com">
              xyz@gmail.com
              </Link>
            </p>
            {/* <p className="flex gap-1 text-white">|</p> */}
            <p className="flex gap-1 text-white text-sm font-meduim ml-[10%]">
              <FaPhone className="text-sm text-white mt-[3px]" />{" "}
              <Link href="tel:+4407385745547">+44 07385745547</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 ml-[20px]">
            {/* Logo */}
            <div>
              <Image
                src={"/Logo_Design-01.svg"}
                alt="Logo"
                width={150}
                height={100}
                className="w-[100px]"
              />
            </div>

            {/* Mobile Navigation (Hamburger Menu) */}
            <div className="lg:hidden">
              <div
                className="bg-primary p-2 flex rounded-md flex-col gap-1"
                onClick={toggleMenu}
              >
                <div
                  className={`flex rounded-md flex-col gap-1 ${
                    isOpen ? "hidden" : ""
                  }`}
                >
                  <div className="w-7 h-1 rounded-md bg-white"></div>
                  <div className="w-6 h-1 rounded-md bg-white"></div>
                  <div className="w-5 h-1 rounded-md bg-white"></div>
                </div>
                <GiCrossMark
                  className={`text-2xl text-white ${!isOpen ? "hidden" : ""}`}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block ">
              <ul className="flex items-center gap-7">
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <Link href={"/"}> Home</Link>
                </li>
                <li className="relative text-gray-800 hover:text-black transition duration-300">
                  <NavDropDown data={data.airportRuns} />
                </li>
                <li className="relative text-gray-800 hover:text-black transition duration-300">
                  <NavDropDown data={data_1.airportRuns} />
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <Link href={"/blog"}> Blog</Link>
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <Link href={"/about"}> About Us</Link>
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <Link href={"/contact"}> Contact Us</Link>
                </li>
                <li>
                  <Button className="bg-black text-white flex">
                    <div className="flex items-center gap-1">
                      <IoPerson />
                      <span>LOGIN</span>
                    </div>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="bg-white shadow-md mt-2 py-3 rounded-md">
                <ul className="flex flex-col items-center space-y-3">
                  <li className="text-gray-800 hover:text-primary transition duration-300">
                    <Link href={"/"}> Home</Link>
                  </li>
                  <li className="text-gray-800 hover:text-primary transition duration-300">
                    <Link href={"/about"}> Airport</Link>
                  </li>
                  <li className="text-gray-800 hover:text-primary transition duration-300">
                    <Link href={"/about"}> Services</Link>
                  </li>
                  <li className="text-gray-800 hover:text-primary transition duration-300">
                    <Link href={"/about"}> Blog</Link>
                  </li>
                  <li className="text-gray-800 hover:text-primary transition duration-300">
                    <Link href={"/contact"}> About Us</Link>
                  </li>
                  <li className="text-gray-800 hover:text-primary transition duration-300">
                    <Link href={"/contact"}> Contact Us</Link>
                  </li>
                  <li>
                    <Button className="bg-primary text-white">
                      <div className="flex items-center gap-1">
                        <IoPerson />
                        <span>LOGIN</span>
                      </div>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
