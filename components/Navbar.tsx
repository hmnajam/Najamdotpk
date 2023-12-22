/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DpkNLCNyICi
 */
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="bg-[#2c0346] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a className="font-bold text-lg" href="#">
            Logo
          </a>
          <a className="hover:text-gray-300" href="/">
            Home
          </a>
          <a className="hover:text-gray-300" href="/portfolio">
            Portfolio
          </a>
          <a className="hover:text-gray-300" href="testimonials">
            Testimonials
          </a>
          <a className="hover:text-gray-300" href="/blog">
            Blog
          </a>
          <a className="hover:text-gray-300" href="/about">
            About
          </a>
          <a className="hover:text-gray-300" href="/contact">
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <SettingsIcon className="text-white h-6 w-6" />
          <BellIcon className="text-white h-6 w-6" />
          <Button className="bg-white text-[#2c0346] mx-2">Resume</Button>
          <Button className="bg-[#ff914d] text-white">Hire Me</Button>
        </div>
      </div>
    </nav>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
