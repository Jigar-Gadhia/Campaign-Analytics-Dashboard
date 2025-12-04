import { useEffect, useState } from "react";
import api from "../api/client";
import type { Campaign } from "../types/campaign";
import type { StatusType } from "../types/status";

export function useCampaigns() {
  const [data, setData] = useState<Campaign[]>([]);
  const [status, setStatus] = useState<StatusType>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);

        const response = await api.get<Campaign[]>("/campaigns", {
          params: status ? { status } : undefined,
        });

        setData(response.data);

      } catch (error) {
        console.error("API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [status]);

  return {
    data,
    loading,
    status,
    setStatus,
  };
}
