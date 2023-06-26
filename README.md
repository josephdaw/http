# HTTP wrapper
[![CI](https://github.com/josephdaw/http/actions/workflows/build.yml/badge.svg)](https://github.com/josephdaw/http/actions/workflows/build.yml)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)


## Table of Contents
- [Description](#description)
- [Features](#features)
- [Issues and Requests](#issues-and-requests)
- [Security](#security)
- [Contributing](#contributing)
- [Changes](#changelog)


## Description
This is a custom http wrapper. This module is to enable the user to absract away the http calls and focus on the data. 

## Installation
### Using npm
```bash
npm install @jd/http`
```

## Usage
### Importing
```javascript
const http = require('@jd/http');
```

### GET
```javascript
http.get(url)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
```


### POST
```javascript
http.post(url, data)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
```

### PUT
```javascript
http.put(url, data)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
```

### DELETE
```javascript
http.delete(url)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
```

## Issues and Requests
Please report any bugs or feature requests via [GitHub Issues](https://github.com/josephdaw/http/issues). 

## Security 
Please report any security issues to [dev@josephdaw.com](mailto:dev@josephdaw.com). Find more information in our [Security Policy](.github/SECURITY.md)

## Contributing
All development of this project happens through GitHub. We welcome constructive collaboration from the community to help implement new features or fix bugs. For more information please read our [Contribution Guide](.github/CONTRIBUTING.md)

## Changelog
Every significant change is documented in the [changelog file](CHANGELOG.md). 

## License
This project is released under the [MIT License](LICENSE).
