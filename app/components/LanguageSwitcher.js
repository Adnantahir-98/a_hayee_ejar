"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../context/TranslationContext";

const LanguageSwitcher = () => {
  const { language, updateLanguage, translate } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 cursor-pointer bg-transparent border-none"
        style={{ background: "none" }}
      >
        {/* Globe Icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          stroke="#000"
          strokeWidth="1.4"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" d="M12,22 C14.67,19.58 16,16.24 16,12 C16,7.76 14.67,4.42 12,2 C9.33,4.42 8,7.76 8,12 C8,16.24 9.33,19.58 12,22 Z" />
          <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />
        </svg>

        {/* Language Name */}
        <span style={{ fontSize: "14px" }}>
          {language === "en" ? "English" : "عربی"}
        </span>

        {/* Dropdown Arrow */}
        <svg width="14" height="14" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <ul
          className="absolute z-50 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[120px]"
          style={{
            right: 0,
            border: "1px solid #ddd",
          }}
        >
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                updateLanguage("en");
                setOpen(false);
              }}
            >
              English
            </a>
          </li>

          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                updateLanguage("ar");
                setOpen(false);
              }}
              style={{ textAlign: "right" }}
            >
              عربی
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default LanguageSwitcher;
