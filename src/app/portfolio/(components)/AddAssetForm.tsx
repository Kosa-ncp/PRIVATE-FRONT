"use client";

// import { Plus, Shield } from "lucide-react";
// import React, { useState } from "react";

const AddAssetForm = () => {
  // const [assets, setAssets] = useState(asset);
  // const [assetForm, setAssetForm] = useState({
  //   type: "국내주식",
  //   name: "",
  //   currentValue: "",
  //   purchasePrice: "",
  //   purchaseDate: "",
  //   memo: "",
  // });

  // const handleAddAsset = () => {
  //   if (
  //     !assetForm.name ||
  //     !assetForm.currentValue ||
  //     !assetForm.purchasePrice
  //   ) {
  //     alert("필수 정보를 모두 입력해주세요.");
  //     return;
  //   }

  //   const newAsset = {
  //     id: Date.now(),
  //     type: assetForm.type,
  //     name: assetForm.name,
  //     currentValue: parseInt(assetForm.currentValue),
  //     purchasePrice: parseInt(assetForm.purchasePrice),
  //     purchaseDate: assetForm.purchaseDate,
  //     memo: assetForm.memo,
  //   };

  //   setAssets((prev) => [...prev, newAsset]);
  //   setAssetForm({
  //     type: "국내주식",
  //     name: "",
  //     currentValue: "",
  //     purchasePrice: "",
  //     purchaseDate: "",
  //     memo: "",
  //   });
  //   alert("자산이 성공적으로 추가되었습니다!");
  // };

  // return (
  //   <div className="space-y-6">
  //     <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
  //       <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
  //         <Plus className="w-5 h-5 mr-2" />
  //         자산 정보 입력
  //       </h3>

  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //         <div className="space-y-4">
  //           <div>
  //             <label className="block text-sm font-medium text-gray-300 mb-2">
  //               자산 유형
  //             </label>
  //             <select
  //               value={assetForm.type}
  //               onChange={(e) =>
  //                 setAssetForm((prev) => ({
  //                   ...prev,
  //                   type: e.target.value,
  //                 }))
  //               }
  //               className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
  //               <option>국내주식</option>
  //               <option>해외주식</option>
  //               <option>부동산</option>
  //               <option>가상자산</option>
  //               <option>예적금</option>
  //               <option>기타</option>
  //             </select>
  //           </div>

  //           <div>
  //             <label className="block text-sm font-medium text-gray-300 mb-2">
  //               자산명 *
  //             </label>
  //             <input
  //               type="text"
  //               value={assetForm.name}
  //               onChange={(e) =>
  //                 setAssetForm((prev) => ({
  //                   ...prev,
  //                   name: e.target.value,
  //                 }))
  //               }
  //               placeholder="예: 삼성전자, 애플 주식"
  //               className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
  //             />
  //           </div>

  //           <div>
  //             <label className="block text-sm font-medium text-gray-300 mb-2">
  //               현재 평가금액 *
  //             </label>
  //             <input
  //               type="number"
  //               value={assetForm.currentValue}
  //               onChange={(e) =>
  //                 setAssetForm((prev) => ({
  //                   ...prev,
  //                   currentValue: e.target.value,
  //                 }))
  //               }
  //               placeholder="원"
  //               className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
  //             />
  //           </div>
  //         </div>

  //         <div className="space-y-4">
  //           <div>
  //             <label className="block text-sm font-medium text-gray-300 mb-2">
  //               매입 원가 *
  //             </label>
  //             <input
  //               type="number"
  //               value={assetForm.purchasePrice}
  //               onChange={(e) =>
  //                 setAssetForm((prev) => ({
  //                   ...prev,
  //                   purchasePrice: e.target.value,
  //                 }))
  //               }
  //               placeholder="원"
  //               className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
  //             />
  //           </div>

  //           <div>
  //             <label className="block text-sm font-medium text-gray-300 mb-2">
  //               매입일
  //             </label>
  //             <input
  //               type="date"
  //               value={assetForm.purchaseDate}
  //               onChange={(e) =>
  //                 setAssetForm((prev) => ({
  //                   ...prev,
  //                   purchaseDate: e.target.value,
  //                 }))
  //               }
  //               className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
  //             />
  //           </div>

  //           <div>
  //             <label className="block text-sm font-medium text-gray-300 mb-2">
  //               메모 (선택)
  //             </label>
  //             <textarea
  //               value={assetForm.memo}
  //               onChange={(e) =>
  //                 setAssetForm((prev) => ({
  //                   ...prev,
  //                   memo: e.target.value,
  //                 }))
  //               }
  //               placeholder="추가 정보나 투자 목적 등"
  //               rows={3}
  //               className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
  //             />
  //           </div>
  //         </div>
  //       </div>

  //       <div className="mt-6 flex justify-end space-x-4">
  //         <button
  //           onClick={() =>
  //             setAssetForm({
  //               type: "국내주식",
  //               name: "",
  //               currentValue: "",
  //               purchasePrice: "",
  //               purchaseDate: "",
  //               memo: "",
  //             })
  //           }
  //           className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors">
  //           초기화
  //         </button>
  //         <button
  //           onClick={handleAddAsset}
  //           className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg transition-all">
  //           자산 추가
  //         </button>
  //       </div>
  //     </div>

  //     {/* 개인정보 보호 안내 */}
  //     <div className="bg-green-900 border border-green-700 p-4 rounded-lg">
  //       <div className="flex items-center">
  //         <Shield className="w-5 h-5 text-green-400 mr-2" />
  //         <span className="text-green-200 font-medium">프라이버시 보호</span>
  //       </div>
  //       <p className="text-green-300 text-sm mt-2">
  //         입력하신 모든 데이터는 암호화되어 저장됩니다. 언제든지 데이터를
  //         삭제하거나 내보내기할 수 있습니다.
  //       </p>
  //     </div>
  //   </div>
  // );
  return <div>Add Form</div>;
};

export default AddAssetForm;
