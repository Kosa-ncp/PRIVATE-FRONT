import { Edit, Trash2 } from "lucide-react";
import React from "react";
import { getPortfolioListTypes } from "../../../../utils/utilsTypes";

interface AssetListProps {
  assets: getPortfolioListTypes["data"];
  handleDeleteAsset: (id: string) => void;
  handleEditAsset: (id: string) => void;
}

const AssetList = ({
  assets,
  handleDeleteAsset,
  handleEditAsset,
}: AssetListProps) => {
  return (
    <tbody>
      {assets.map((asset) => {
        return (
          <tr
            key={asset.assetId}
            className="border-b border-gray-700 hover:bg-gray-750">
            <td className="py-3 px-4 text-white font-medium">
              {asset.assetName}
            </td>
            <td className="py-3 px-4 text-gray-300">{asset.assetType}</td>
            <td className="py-3 px-4 text-right text-white">
              ₩{asset.valuation.toLocaleString()}
            </td>
            <td className="py-3 px-4 text-right text-white">
              ₩{asset.averagePrice.toLocaleString()}
            </td>
            <td className="py-3 px-4 text-right text-white">
              {asset.quantity.toLocaleString()}
            </td>
            <td className="py-3 px-4 text-right text-gray-300">
              ₩{(asset.averagePrice * asset.quantity).toLocaleString()}
            </td>
            <td
              className={`py-3 px-4 text-right font-medium ${asset.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
              {asset.profit >= 0 ? "+" : "-"}₩
              {Math.abs(asset.profit).toLocaleString()}
            </td>
            <td
              className={`py-3 px-4 text-right font-medium ${asset.profitRate >= 0 ? "text-green-400" : "text-red-400"}`}>
              {asset.profitRate >= 0 ? "+" : ""}
              {asset.profitRate}%
            </td>
            <td className="py-3 px-4 text-center">
              <div className="flex justify-center space-x-2">
                <button
                  onClick={() => handleEditAsset(asset.assetId)}
                  className="text-blue-400 hover:text-blue-300">
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteAsset(asset.assetId)}
                  className="text-red-400 hover:text-red-300">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default AssetList;
