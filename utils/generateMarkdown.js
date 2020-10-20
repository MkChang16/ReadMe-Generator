// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![Badges](https://img.shields.io/badge/License-${data.license}-blue)

## Description
${data.description}

## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Licenses](#licenses)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)


## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.credits}

## Licenses
${data.license}

## Contributing
${data.contribution}

## Test
${data.test}

## Questions
Visit my Github account at github.com/[${data.username}](https://github.com/${data.username})

${data.email}

`;
}

module.exports = generateMarkdown;
