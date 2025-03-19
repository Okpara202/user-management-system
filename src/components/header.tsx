function Header() {
  return (
    <header className=" py-4 border-b-0 border-gray-300 shadow-md shadow-gray-bg">
      <div className="container mx-auto px-4">
        <svg
          width="200"
          height="64"
          viewBox="0 0 200 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0"
            y="32"
            fontFamily="Poppins, sans-serif"
            fontSize="32"
            fontWeight="bold"
            fill="#1E3A8A"
          >
            Favour
          </text>

          <text
            x="0"
            y="64"
            fontFamily="Poppins, sans-serif"
            fontSize="32"
            fontWeight="bold"
            fill="#f5772f"
          >
            ●
          </text>

          <text
            x="16"
            y="64"
            fontFamily="Poppins, sans-serif"
            fontSize="32"
            fontWeight="bold"
            fill="#1E3A8A"
          >
            Okpara
          </text>
        </svg>
      </div>
    </header>
  );
}

export default Header;
