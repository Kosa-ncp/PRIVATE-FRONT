"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FileText } from "lucide-react";

interface MarkdownReaderProps {
  content: string;
  title?: string;
  className?: string;
}

const MarkdownReader = ({
  content,
  title,
  className = "",
}: MarkdownReaderProps) => {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 ${className}`}>
      {title && (
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
          <FileText className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
      )}

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold text-white mb-4 mt-6 first:mt-0">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-bold text-white mb-3 mt-5">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-white">{children}</strong>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse">{children}</table>
              </div>
            ),
            th: ({ children }) => (
              <th className="border border-gray-600 bg-gray-700 px-4 py-2 text-left font-semibold text-white">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border border-gray-600 bg-gray-800 px-4 py-2 text-gray-300">
                {children}
              </td>
            ),

            // 리스트 스타일
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-4 space-y-1 text-gray-300">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-300">
                {children}
              </ol>
            ),
            li: ({ children }) => <li className="text-gray-300">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-400 bg-blue-400/5 pl-4 py-2 my-4 italic text-gray-300">
                {children}
              </blockquote>
            ),
            hr: () => <hr className="border-gray-600 my-6" />,
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">
                {children}
              </a>
            ),
          }}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownReader;
