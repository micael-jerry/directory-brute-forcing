# Directory Brute Forcing

- **FIDIMALALA Micael Jerry**
- **<hei.jerry.2@gmail.com>**
- **STD21041**

## Description

This application allows you to test a list of possible paths on a web application and return the existing paths.

## Instructions for starting the project

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download Node.js from [the official Node.js website](https://nodejs.org/).

### Steps to get started

1. **Close the project:**

```bash
git clone https://github.com/micael-jerry/directory-brute-forcing.git
cd directory-brute-forcing
```

2. **Installing the various dependencies required for typescript to function properly**

```bash
npm install
```

3. **Run:**

- **cible (`required`):** target url.
- **wordListPath (`optional`):** path to word list from project root (if you don't set it, the app uses the word list present in ./docs/dir_list.txt)

```bash
npm run app <cible> <optional>
```

- **example**: `npm run app <http://127.0.0.1:5000> ~/dir_list.txt`
