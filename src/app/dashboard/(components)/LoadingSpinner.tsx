import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "gradient" | "dots" | "pulse" | "ring";
  text?: string;
  className?: string;
}

const LoadingSpinner = ({
  size = "md",
  variant = "gradient",
  text,
  className = "",
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const GradientSpinner = () => (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 opacity-75 animate-spin">
        <div className="absolute inset-1 rounded-full bg-gray-900"></div>
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-orange-500 to-teal-400 opacity-50 animate-spin animation-delay-150">
        <div className="absolute inset-1 rounded-full bg-gray-900"></div>
      </div>
    </div>
  );

  const DotsSpinner = () => (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-100"></div>
      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce animation-delay-200"></div>
      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce animation-delay-300"></div>
    </div>
  );

  const PulseSpinner = () => (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 animate-ping opacity-75"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 animate-ping opacity-50 animation-delay-300"></div>
      <div className="relative rounded-full bg-gradient-to-r from-blue-500 to-teal-400 w-full h-full opacity-90"></div>
    </div>
  );

  const RingSpinner = () => (
    <div className={`relative ${sizeClasses[size]}`}>
      <svg className="animate-spin" viewBox="0 0 50 50">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <circle
          className="opacity-25"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="4"
        />
        <circle
          className="opacity-75"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="4"
          strokeDasharray="80"
          strokeDashoffset="60"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  const renderSpinner = () => {
    switch (variant) {
      case "dots":
        return <DotsSpinner />;
      case "pulse":
        return <PulseSpinner />;
      case "ring":
        return <RingSpinner />;
      default:
        return <GradientSpinner />;
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderSpinner()}
      {text && (
        <div
          className={`text-gray-300 font-medium ${textSizeClasses[size]} animate-pulse`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
