import type { Campaign } from "../types/campaign";

export const CampaignCard = ({ c }: { c: Campaign }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow p-4 flex flex-col space-y-3">
      
      {/* Title */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg text-white">{c.name}</h3>

        <span
          className={`px-2 py-1 rounded-lg text-xs font-bold ${
            c.status === "Active"
              ? "bg-green-100 text-green-700 border-green border-1"
              : "bg-yellow-100 text-yellow-700 border-yellow border-1"
          }`}
        >
          {c.status}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
        <div>
          <p className="text-gray-300">Clicks</p>
          <p className="font-medium text-gray-400">{c.clicks}</p>
        </div>
        <div>
          <p className="text-gray-300">Cost</p>
          <p className="font-medium text-gray-400">${c.cost}</p>
        </div>
        <div>
          <p className="text-gray-300">Impressions</p>
          <p className="font-medium text-gray-400">{c.impressions}</p>
        </div>
      </div>
    </div>
  );
}
