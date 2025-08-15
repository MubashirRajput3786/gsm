import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white py-4  border-gray-800">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        
        {/* Left Side Text */}
        <div className="text-sm text-gray-400 flex flex-wrap items-center gap-2 text-center md:text-left">
          <span>© 2025 Get Style Money (GSM). All Rights Reserved.</span>
          <span>|</span>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition">Terms & Conditions</a>
        </div>

        {/* Right Side - Follow Us */}
        <div className="flex items-center gap-3 text-gray-400">
          <span className="text-sm">Follow Us On</span>
          <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
            <FaYoutube size={16} />
          </a>
          <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
            <FaTiktok size={16} />
          </a>
          <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
            <FaXTwitter size={16} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
