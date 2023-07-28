import React from "react";
import "./style.css";
import "design-system-core/dist/components/card";
import "design-system-core/dist/components/tag";
import "design-system-core/dist/components/typography";

export const CardContent = ({
  tagContent,
  headingContent,
  paragraphContent,
}) => {
  return (
    <dsc-card class="card-content">
      <dsc-tag>{tagContent}</dsc-tag>
      <dsc-typography variant="h3" component="heading" size="lg">
        {headingContent}
      </dsc-typography>
      <dsc-typography component="paragraph">{paragraphContent}</dsc-typography>
    </dsc-card>
  );
};
