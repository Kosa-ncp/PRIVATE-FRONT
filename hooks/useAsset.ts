import { useAssetStore } from "../stores/asserStore";

export const useAsset = (assetId: string) => {
  const getAssetById = useAssetStore((state) => state.getAssetById);
  const isInitialized = useAssetStore((state) => state.isInitialized);

  const data = isInitialized ? getAssetById(assetId) : undefined;
  return { data, isFound: !!data };
};
