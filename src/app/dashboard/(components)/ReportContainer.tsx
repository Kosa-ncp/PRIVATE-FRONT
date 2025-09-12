import React from "react";
import { FileText } from "lucide-react";
import MarkdownReader from "./MarkdownReader";

interface ReportSectionProps {
  title?: string;
  reports: string;
  className?: string;
}

const ReportContainer = ({
  title = "상세 리포트",
  reports,
  className = "",
}: ReportSectionProps) => {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
      </div>

      <MarkdownReader content={reports} />

      <div className="mt-6 text-center">
        {/* <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 cursor-pointer">
          전체 리포트 보기 →
        </button> */}
      </div>
    </div>
  );
};

export default ReportContainer;
