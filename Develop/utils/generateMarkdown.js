//Linking for bade license
const licenseInfo = (license) => {
  if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] (https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)' 
  }
  if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-yellow.svg)](https://opensource.org/licenses/Unlicense)'
  }
  if (license === 'none') {
    return 'No license'
  }
}

//README.md Template Generation
const generateMarkdown = (data) => {
  return `
  # **${data.title}**
  
  Badge is linked to additional information for license.
  
  ${licenseInfo(data.license)}
  
  ## Table of Contents
  
  [Description](#Description)
  
  [Usage](#Usage)

  [Install](#Install)
  
  [Contribution](#Contribution)

  [Testing](#Testing)

  [License](#License)

  [GitHub](#Github)

  [Email](#Email)


  ## Description
    ${data.description}

  ## Usage
  ${data.usage}

  ## Install
  ${data.install}
  
  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.testing}

  ## License

  Click on the badge at the top of the README.md to be directed to additional information about that license.
  ${data.license}

  ## GitHub

  ${data.github}

  ## Email

  ${data.email}

  `;
}

module.exports = generateMarkdown;