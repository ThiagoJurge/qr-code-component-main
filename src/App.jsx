import "./App.css";
export default function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white text-center w-64 rounded-md shadow-lg">
        <div className="p-2">
          <img
            className="rounded-md img w-auto border border-gray-300"
            src="./image-qr-code.png"
            alt="QR Code"
          />
        </div>
        <div className="p-2">
          <h5 className="text-lg font-bold tracking-tight">
            Improve your front-end skills by building projects
          </h5>
          <p className="text-sm  text-grayish-blue">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
