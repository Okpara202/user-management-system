import {
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-20  p-4 py-10 bg-gradient-to-r from-blue-900 via-blue-950 to-orange text-white text-center">
      <h1 className="font-bold text-5xl">Okpara Favour</h1>
      <p className="my-6 leading-[1.5] mx-auto md:w-3/5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nisi
        at. Perferendis fuga nemo aperiam iste, possimus reiciendis optio
        inventore illum recusandae praesentium modi dolores eveniet perspiciatis
        maxime. Fugit, adipisci.
      </p>
      <ul className="w-1/3 list-none flex items-center justify-evenly mx-auto text-xl">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaGooglePlus />
        </li>
        <li>
          <FaMedium />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
