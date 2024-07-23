const fs = require("fs");
const path = require("path");

// Set the directory containing your SVG files
const svgDirectory = "./.svg";
// Set the directory to save the generated React component files
const outputDirectory = "./components/icons";
// Path to the index.ts file
const indexPath = path.join(outputDirectory, "index.ts");

// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// Delete the old index.ts file
if (fs.existsSync(indexPath)) {
  fs.unlinkSync(indexPath);
}

// Ensure the index.ts file exists
if (!fs.existsSync(indexPath)) {
  fs.writeFileSync(indexPath, "", "utf8");
}

// Template for the React component in TypeScript
const componentTemplate = (
  componentName,
  title,
  svgPath,
  defaultColor
) => `import * as React from 'react';

import { IconType } from './types';

type ${componentName}Props = React.ComponentPropsWithoutRef<'svg'> & {
  /**
   * The title provides an accessible short text description to the SVG
   */
  title?: string;
  /**
   * Hex color or color name or "default" to use the default hex for each icon
   */
  color?: string;
  /**
   * The size of the Icon.
   */
  size?: string | number;
}

const defaultColor = '${defaultColor}';

const ${componentName}: IconType = React.forwardRef<SVGSVGElement, ${componentName}Props>(function ${componentName}({ title = '${title}', color = 'currentColor', size = 24, ...others }, ref) {
  if (color === 'default') {
    color = defaultColor;
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 24 24'
      ref={ref}
      {...others}
    >
      <title>{title}</title>
      ${svgPath}
    </svg>
  );
});

export { ${componentName} as default, defaultColor };
`;

// Function to convert SVG filename to a React component name
const convertFilenameToComponentName = (filename) => {
  const name = path.basename(filename, path.extname(filename));
  return (
    "Icon" +
    name
      .split("-")
      .filter((word) => !["color", "size"].includes(word))
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  );
};

// Function to extract the first <path> element, including its content
const extractPathElement = (svgContent) => {
  const pathMatch = svgContent.match(/<path[\s\S]*?<\/path>/);
  if (pathMatch) return pathMatch[0];

  // Fallback to self-closing <path> element
  const selfClosingPathMatch = svgContent.match(/<path.*?\/>/);
  return selfClosingPathMatch ? selfClosingPathMatch[0] : "";
};

// Loop through each SVG file in the directory
fs.readdirSync(svgDirectory).forEach((filename) => {
  if (filename.endsWith(".svg")) {
    const componentName = convertFilenameToComponentName(filename);
    const svgContent = fs.readFileSync(
      path.join(svgDirectory, filename),
      "utf8"
    );

    // Extract the title from the SVG content if exists
    const titleMatch = svgContent.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : componentName;

    // Extract the path from the SVG content
    const svgPath = extractPathElement(svgContent);

    // Extract the fill color from the SVG content if exists
    const fillMatch = svgContent.match(/fill="(.*?)"/);
    const defaultColor = fillMatch ? fillMatch[1] : "#00C7B7";

    // Create the component content by replacing placeholders in the template
    const componentContent = componentTemplate(
      componentName,
      title,
      svgPath,
      defaultColor
    );

    // Write the component content to a file
    const outputFilename = path.join(outputDirectory, `${componentName}.tsx`);
    fs.writeFileSync(outputFilename, componentContent, "utf8");

    // Append the export statement to the index.ts file
    fs.appendFileSync(
      indexPath,
      `export { default as ${componentName} } from './${componentName}';\n`,
      "utf8"
    );
  }
});
