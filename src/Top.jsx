import IMAGES from "./images/IMAGE"

function Top() {
  return (
    <div className="w-full h-auto  px-10 pt-5 flex flex-row justify-between items-center">
        <a href="#inicio"><img src={IMAGES.image1} className="h-10"></img></a>
        <a
        href="https://github.com/cristianmancuso"
        aria-label="View source on GitHub"
        className="text-white bg-white"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="hover:text-teal-400"
          width="40"
          height="40"
        >
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.164 6.839 9.493.5.092.683-.218.683-.483 0-.238-.008-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.455-1.154-1.113-1.462-1.113-1.462-.908-.62.07-.608.07-.608 1.004.07 1.531 1.03 1.531 1.03.892 1.527 2.34 1.087 2.913.831.092-.645.35-1.087.635-1.338-2.22-.249-4.556-1.11-4.556-4.943 0-1.092.39-1.988 1.031-2.688-.104-.248-.448-1.271.098-2.647 0 0 .84-.269 2.75 1.025A9.574 9.574 0 0112 6.635a9.57 9.57 0 011.484.122c1.908-1.294 2.748-1.025 2.748-1.025.546 1.376.204 2.399.1 2.647.641.7 1.03 1.596 1.03 2.688 0 3.842-2.338 4.688-4.564 4.932.359.31.678.918.678 1.85 0 1.338-.013 2.414-.013 2.742 0 .27.181.582.688.482C19.138 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"
            fill="white"
          ></path>
        </svg>
      </a>
    </div>
  )
}

export default Top