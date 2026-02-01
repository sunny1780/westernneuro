import { Download } from "lucide-react";

const documents = [
  {
    title: "Welcome letter",
  },
  {
    title: "New patient registration form",
  },
  {
    title: "Medical history",
  },
  {
    title: "Privacy Practices acknowledgment form",
  },
];

export default function FirstAppointment() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-16 py-12 md:py-16 text-left">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
        Your First Appointment
      </h1>
      <h2 className="text-lg  mb-4 font-semibold">Preparing for Your Visit</h2>

      <p className="max-w-3xl mb-12">
      Please arrive 15 minutes early to complete the necessary paperwork. To save time, download and complete these forms in advance and bring them to your appointment.
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
              Download
              <Download size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <h3 className="text-xl font-semibold mb-2">What to Bring</h3>
      <p className="text-gray-400 mb-4">Please bring the following items to your first visit:</p>

      <ul className="list-disc list-inside text-gray-400 space-y-2 max-w-2xl">
        <li>Patient's insurance card and photo identification</li>
        <li>
        List of current medications, including dose and frequency.
        </li>
        <li>Recent test results, x-rays, or relevant medical records</li>
        <li>Referral documentation (if required by insurance)</li>
      </ul>
    </div>
  );
}
