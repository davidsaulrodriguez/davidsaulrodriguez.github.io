# Personal Portfolio

<span align="center">

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/davidsaulrodriguez/davidsaulrodriguez.github.io)
[![Build Status](https://travis-ci.com/davidsaulrodriguez/davidsaulrodriguez.github.io.svg?branch=main)](https://travis-ci.com/davidsaulrodriguez/davidsaulrodriguez.github.io)
[![GitHub license](https://img.shields.io/github/license/davidsaulrodriguez/davidsaulrodriguez.github.io)](https://github.com/davidsaulrodriguez/davidsaulrodriguez.github.io)

---

[![GitHub issues](https://img.shields.io/github/issues/davidsaulrodriguez/davidsaulrodriguez.github.io)](https://github.com/davidsaulrodriguez/davidsaulrodriguez.github.io/issues)
[![GitHub forks](https://img.shields.io/github/forks/davidsaulrodriguez/davidsaulrodriguez.github.io)](https://github.com/davidsaulrodriguez/davidsaulrodriguez.github.io/network)
[![GitHub stars](https://img.shields.io/github/stars/davidsaulrodriguez/davidsaulrodriguez.github.io)](https://github.com/davidsaulrodriguez/davidsaulrodriguez.github.io/stargazers)
![GitHub contributors](https://img.shields.io/github/contributors/davidsaulrodriguez/davidsaulrodriguez.github.io)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_davidsaulrodriguez.github.io&metric=bugs)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_davidsaulrodriguez.github.io)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_davidsaulrodriguez.github.io&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_davidsaulrodriguez.github.io)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_davidsaulrodriguez.github.io&metric=security_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_davidsaulrodriguez.github.io)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_davidsaulrodriguez.github.io&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_davidsaulrodriguez.github.io)
![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/davidsaulrodriguez/davidsaulrodriguez.github.io/latest/main)

</span>

Table of Contents

- [Description](#description)
- [Dependencies](#dependdencies)
- [Installation Requirements](#installation-requirements)
- [Usage](#usage)
- [Development](#development)
- [Supported Versions](#supported-versions)
- [Contributing](#contributing)
- [Bugs and Issues](#bugs-and-issues)
- [License](#license)

## Description

**Shop Portal** is an open source eCommerce platform powered by the MERN stack. It is designed to allow anyone to host their own online shop with ease.

Whether you are starting an online only business or bringing your brick and mortor shop to the digital world, Shop Portal will help you to easily add and sell products to your online shop.

**Download**

[Download the zip][archive] or clone this project.

```shell
git clone https://github.com/davidsaulrodriguez/davidsaulrodriguez.github.io.git
cd davidsaulrodriguez.github.io/
```

## Dependencies

**Project Dependencies**

- "@material-ui/core": "^4.11.3",
- "@material-ui/icons": "^4.11.2",
- "@testing-library/jest-dom": "^5.11.10",
- "@testing-library/react": "^11.2.5",
- "@testing-library/user-event": "^12.8.3",
- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "react-masonry-css": "^1.0.16",
- "react-router-dom": "^5.2.0",
- "react-scripts": "4.0.3",
- "web-vitals": "^1.1.1"

**Development Dependencies**

- "@babel/eslint-parser": "^7.13.10",
- "@babel/plugin-syntax-jsx": "^7.12.13",
- "@babel/preset-react": "^7.13.13",
- "@babel/runtime": "^7.13.10",
- "eslint": "^7.23.0",
- "eslint-config-prettier": "^8.1.0",
- "eslint-plugin-html": "^6.1.2",
- "eslint-plugin-import": "^2.22.1",
- "eslint-plugin-jest": "^24.3.2",
- "eslint-plugin-jsx-a11y": "^6.4.1",
- "eslint-plugin-prettier": "^3.3.1",
- "eslint-plugin-react": "^7.23.1",
- "eslint-plugin-react-hooks": "^4.2.0",
- "gh-pages": "^3.1.0",
- "prettier": "^2.2.1",
- "react-test-renderer": "^17.0.2",
- "ts-node": "^9.1.1",
- "typescript": "^4.2.3"

## Installation Requirements

You will need [NodeJS][nodejs] installed for use with this project.

## Usage

**Getting Started**

To get started with this project, you'll want to install the required dependencies using:

```shell
npm i
```

## Development

### Starting the project

While working and developing on the source code, you can run a live development server with:

```shell
npm start
```

### Formatting (Prettier)

It is suggested that you format your code with **Prettier** in order to make sure you code looks clean and consistent before you commit and publish it to GitHub. To do this, you can simply run:

> This will format your code with Prettier

```shell
npm run format
```

### Linting (ESLint)

Linting is important! You can statically analyzes your code to quickly find problems with **ESLint** by running:

```shell
npm run lint:check
```

### Linting Autofix (ESLint)

This project supports ESLint autofixing to try and assist you with fixing any issues that ESLint may find in your code. To do this you can simply run:

> Please keep in mind that **_this is not fullproof_**.

```shell
npm run lint:fix
```

## Supported Versions

Below is a list of the currently supported versions of this software.

| Release |       Status       | Initial Release | Active LTS Start | Maintenance LTS Start | End of Life |
| :-----: | :----------------: | :-------------: | :--------------: | :-------------------: | :---------: |
| develop |      Unstable      |        -        |        -         |           -           |      -      |
|   v1    | :heavy_check_mark: |   2021-04-11    |    2021-10-11    |           -           | 2022-04-11  |
|   v2    |   :construction:   |   2022-04-01    |    2022-10-01    |      2023-04-01       | 2024-04-01  |

You can view the Status Key Map and software support model [here][support].

## Contributing

Contributions are more than welcome! If you improve on this project, please feel free to share it by submitting a Pull Request.

Before contributing, be sure to check out the [CONTRIBUTING][contrib] and [Branching Model][branching] docs.

## Bugs and Issues

Found a bug? Having an issue with this app? [Open a new issue][issues] here.

## License

This project and all of its source code is released and permissively licensed under the [BSD 2 Clause][license] license.

[archive]: https://github.com/davidsaulrodriguez/davidsaulrodriguez.github.io/archive/main.zip
[mongodb]: https://www.mongodb.com/try/download/community
[nodejs]: https://nodejs.com
[support]: ./SLC.md
[contrib]: ./CONTRIBUTING.md
[branching]: ./docs/Branching_Model.md
[issues]: https://github.com/davidsaulrodriguez/davidsaulrodriguez.github.io/issues/new/choose
[license]: ./LICENSE
