/* eslint-disable indent */
import fs from 'node:fs';

import json from '../styles/color/color-preview.json';

const light = json.Light as any;

const genCss = () => {
  const keys = Object.keys(light);

  const template = `
/* ----------------------------------------------------------- */
/* WARNING: NOT MODIFY THIS FILE */
/* ----------------------------------------------------------- */
/* Step 1: Modify file color-preview.json */
/* Step 2: npm run gen-color */
/* ----------------------------------------------------------- */

:root {
  ${keys
    .map((v) => {
      const value = light[v];

      return Object.keys(value)
        .map((k) => {
          return `--${v}-${k}: ${value[k]};`;
        })
        .join('\n');
    })
    .join('\n')}
}

${keys
  .map((v) => {
    const value = light[v];

    return Object.keys(value)
      .map((k) => {
        return `.${v}-${k} {
      color: ${value[k]};
    };`;
      })
      .join('\n');
  })
  .join('\n')}


`;

  fs.writeFileSync('styles/color/color.variables.css', template);
};

const genTypes = () => {
  const keys = Object.keys(light);

  const templateTs = `
/* ----------------------------------------------------------- */
/* WARNING: NOT MODIFY THIS FILE */
/* ----------------------------------------------------------- */
/* Step 1: Modify file color-preview.json */
/* Step 2: npm run gen-color */
/* ----------------------------------------------------------- */

export type TColor = ${keys
    .map((v) => {
      const value = light[v];

      return Object.keys(value)
        .map((k) => {
          return `"${v}-${k}"`;
        })
        .join(' | ');
    })
    .join(' | ')};
`;

  fs.writeFileSync('styles/color/color.variables.ts', templateTs);
};

const genColorPreviewVscode = () => {
  const keys = Object.keys(light);

  const templateTs = `
{
  "Light": {
    ${keys
      .map((v) => {
        const value = light[v];

        return Object.keys(value)
          .map((k) => {
            return [`"${v}-${k}": "${value[k]}"`, `"--${v}-${k}": "${value[k]}"`].join(',\n');
          })
          .join(',\n');
      })
      .join(',\n')}
  }
}
`;

  fs.writeFileSync('styles/color/color-preview-vscode.json', templateTs);
};

genCss();
genTypes();
genColorPreviewVscode();
