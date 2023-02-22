// function for license badges
  function licenseBadge(value) {
    if (value === "Apache 2.0 License") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "GNU GPL v3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge&logo=appveyor)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "The MIT License") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/MIT)";
    } else if (value === "ISC License (ISC") {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/ISC)";
    } else if (value === "BSD 2-Clause License") {
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/BSD-2-Clause)";
    } else if (value === "BSD 3-Clause License") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (value === "Boost Software License 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg?style=for-the-badge&logo=appveyor)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (value === "Creative Commons Zero v1.0 Universal") {
        return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png?style=for-the-badge&logo=appveyor)](http://creativecommons.org/publicdomain/zero/1.0/)";
    } else if (value === "Eclipse Public License 1.0") {
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/EPL-1.0)";
    } else if (value === "Mozilla Public License 2.0") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/MPL-2.0)";
    } else {
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg?style=for-the-badge&logo=appveyor)](http://unlicense.org/)";
    }
  };
  
  module.exports = {
    licenseBadge: licenseBadge,
  };
