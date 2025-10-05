import React from "react";
import { Highlight } from "@/data/highlights";
import { CheckCheckIcon, CircleCheck, CircleCheckBigIcon } from "lucide-react";

interface HighlightItemProps {
  highlight: Highlight;
  index: number;
  className?: string;
}

const HighlightItem: React.FC<HighlightItemProps> = React.memo(
  ({ highlight, index, className = "" }) => {
    return (
      <div
        className={`group transition-all duration-300 hover:translate-x-1 ${className}`}
        role="listitem"
        aria-label={`Highlight ${index + 1}: ${highlight.title}`}
      >
        <div className="flex items-start gap-3">
          {/* Checkbox Icon */}
          <div className="flex-shrink-0 mt-1">
            <CircleCheckBigIcon className="text-secondary" />
          </div>

          {/* Content */}
          <div className="flex-1 text-lg">
            <span className="text-secondary font-semibold transition-colors duration-200 group-hover:text-[#005B8D]">
              {highlight.title}
            </span>
            <span className="text-[#212121]"> — {highlight.description}</span>
          </div>
        </div>
      </div>
    );
  }
);

HighlightItem.displayName = "HighlightItem";

export default HighlightItem;
