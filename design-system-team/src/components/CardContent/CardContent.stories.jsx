import React from "react";
import { CardContent as CardContentComponent } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Team Component/Card Content",
  component: CardContentComponent,
};

export const CardContent = {
  renderContent: (args) => {
    return (
      <div style={{ width: "315px", height: "417px" }}>
        <CardContentComponent {...args} />
      </div>
    );
  },
  args: {
    tagContent: "Tag Highlight",
    headingContent: "Heading",
    paragraphContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
};
