import { Download } from "lucide-react";

const documents = [
  {
    title: "Required Documents",
  },
//   {
//     title: "New patient registration form",
//   },
//   {
//     title: "Medical history",
//   },
//   {
//     title: "Privacy Practices acknowledgment form",
//   },
];

export default function SleepStudyInformation() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-16 py-12 md:py-16 text-left">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
      Sleep Study Information
      </h1>
      <h2 className="text-lg  mb-4 font-semibold">Preparing for Your Sleep Study</h2>

      <p className="max-w-3xl mb-12">
      Preparing for Your Sleep Study
If you've been scheduled for a sleep study at our facility, proper preparation is essential for accurate results. Please review the instructions below and download the complete patient guide to ensure you're fully prepared for your appointment.

      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="bg-sky-50 text-black rounded-xl p-6 flex flex-col justify-between shadow-md"
          >
            <h3 className="text-lg font-semibold mb-6">{doc.title}</h3>

            <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg w-fit">
            Patient Instructions for Sleep Study
              <Download size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <h3 className="text-xl font-semibold mb-2">What to Bring to Your Sleep Study</h3>
      <p className=" mb-4">Also, please bring the following:</p>

      <ul className="list-disc list-inside text-gray-400 space-y-2 max-w-2xl">
        <li>Patient's insurance card and identification</li>
        <li>
        Comfortable sleepwear (two-piece pajamas recommended)
        </li>
        <li>Personal toiletries and any nighttime medications</li>
        <li>A book or relaxing activity for before bedtime</li>
        <li>List of current medications you're taking</li>
        <li>Clean, product-free hair (no gels, sprays, or oils)</li>
      </ul>
    </div>
  );
}
