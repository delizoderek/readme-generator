// Returns the correct license badge based on the license text. Returns empty if the license can't be found in the switch statement
function renderLicenseBadge(license) {
  switch(license){
    case "GPLv3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "GPLv2":
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case "AGPL":
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case "LGPL":
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    case "FDL":
      return `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "BSD-2-Clause":
      return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    case "BSD-3-Clause":
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case "Apache-2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "CC0":
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    default:
      return ``;
  }
}

// returns the license section with the correct license badge
function renderLicenseSection(license) {
  return `# License
  ${renderLicenseBadge(license)}`;
}

// Populates the readme output with the answer data
function generateMarkdown(data) {
  const {projTitle,projDescription,installSteps,usage,contributeText,testDesc,username,email,license} = data;
  return `# ${projTitle}
  ## Description
  ${projDescription}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
  ## Installation
  ${installSteps}
  ## Usage
      ${usage}
  ## Testing
      ${testDesc}
  ## Contributing
  ${contributeText}
  ## Questions
  [Github](https://github.com/${username})
  <br>
  <br>
  [Email](${email})
  ${renderLicenseSection(license)}`;
}

module.exports = generateMarkdown;
