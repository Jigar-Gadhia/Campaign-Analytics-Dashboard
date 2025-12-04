import type { Campaign } from "../types/campaign";
import { CampaignCard } from "./CampaignCard";

export const CampaignGrid = ({ campaigns }: { campaigns: Campaign[] }) => {
  if (!campaigns?.length) {
    return (
      <p className="text-center py-20 text-gray-500 text-sm">
        No campaigns found
      </p>
    );
  }

  return (
    <div className="
      grid gap-5
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4
      px-5
      pb-5
    ">
      {campaigns.map((c) => (
        <CampaignCard key={c.id} c={c} />
      ))}
    </div>
  );
}
