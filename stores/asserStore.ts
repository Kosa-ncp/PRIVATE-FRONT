// stores/assetStore.ts
import { create } from "zustand";
import { getPortfolioDataType } from "../utils/utilsTypes";

interface PortfolioState {
  data: getPortfolioDataType[];
  isInitialized: boolean;
  selectedAssetId: string | null;

  // 초기화: TanStack Query 데이터로 스토어 초기화
  initializeAssets: (data: getPortfolioDataType[]) => void;

  // 조회: 특정 자산 조회
  getAssetById: (assetId: string) => getPortfolioDataType | undefined;

  // 수정: 로컬 상태 업데이트 (Optimistic Update용)
  updateAsset: (
    assetId: string,
    updates: Partial<getPortfolioDataType[]>
  ) => void;

  setSelectedAssetId: (assetId: string | null) => void;
  reset: () => void;
}

export const useAssetStore = create<PortfolioState>()((set, get) => ({
  data: [],
  isInitialized: false,
  selectedAssetId: null,

  initializeAssets: (data) => {
    set({ data, isInitialized: true });
  },

  getAssetById: (assetId) => {
    const { data } = get();
    return data.find((data) => data.assetId === assetId);
  },

  updateAsset: (assetId, updates) => {
    set((state) => ({
      data: state.data.map((item) =>
        item.assetId === assetId ? { ...item, ...updates } : item
      ),
    }));
  },

  setSelectedAssetId: (assetId) => set({ selectedAssetId: assetId }),
  reset: () =>
    set({
      data: [],
      isInitialized: false,
      selectedAssetId: null,
    }),
}));
