import { create } from "zustand";
import { getPortfolioDataType } from "../utils/utilsTypes";

interface PortfolioState {
  data: getPortfolioDataType[];
  isInitialized: boolean;
  selectedAssetId: string | null;

  setPortfolio: (data: getPortfolioDataType[]) => void;

  getAssetById: (assetId: string) => getPortfolioDataType | undefined;

  setSelectedAssetId: (assetId: string | null) => void;

  reset: () => void;
}

const useAssetStore = create<PortfolioState>()((set, get) => ({
  data: [],
  isInitialized: false,
  selectedAssetId: null,

  setPortfolio: (data) => {
    set({ data, isInitialized: true });
  },

  getAssetById: (assetId) => {
    const { data } = get();
    return data.find((data) => data.assetId === assetId);
  },

  setSelectedAssetId: (assetId) => set({ selectedAssetId: assetId }),

  reset: () =>
    set({
      data: [],
      isInitialized: false,
      selectedAssetId: null,
    }),
}));

export default useAssetStore;
