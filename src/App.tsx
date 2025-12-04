import { StatusFilter } from "./components/StatusFilter";
import { CampaignGrid } from "./components/CampaignGrid";
import { useCampaigns } from "./hooks/useCampaigns";
import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";

export default function Dashboard() {
  const { data, loading, status, setStatus } = useCampaigns();

  return (
    <div className="space-y-6 bg-black min-h-screen">

      {/* Page header */}
      <div className="w-screen
        sticky top-0 left-0 w-full z-20
        flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4
        bg-gray-800 backdrop-blur-md
        px-6 py-4
        shadow-lg
        max-w-full">
        <Navbar />

        <div className="w-full sm:w-auto sm:ml-auto">
          <StatusFilter status={status} setStatus={setStatus} />
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <Loader />
      ) : (
        <CampaignGrid campaigns={data} />
      )}

    </div>
  );
}
