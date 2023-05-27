const fs = require("fs");
const { svgToJS } = require("./utils/svgToJS");
const assetModuleFolder = ["icons"];

assetModuleFolder.forEach((asset) => {
  const options = {
    inputDir: `src/assets/${asset}`,
    outputDir: `dist/assets/${asset}`,
  };

  svgToJS(options);
});
