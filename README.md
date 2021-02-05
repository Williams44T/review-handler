# Review Handler

- This project aims to clone the reviews component of an example item page of Adidas using random, fake data.
- Three other components are being cloned: photo carousel, checkou, recommendations
- A proxy server will pull all four of these components together to make a full clone.
- Other components found on Adidas's single item page that aren't being cloned will have an image serve in thier place.

## Related Projects

  - https://github.com/1-All-Day-I-Dream-About-Semicolons/photoCarousel
  - https://github.com/1-All-Day-I-Dream-About-Semicolons/checkout
  - https://github.com/1-All-Day-I-Dream-About-Semicolons/recommendations
  - https://github.com/1-All-Day-I-Dream-About-Semicolons/reviews-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

- `npm run build`: to have webpack watch all changes
- `npm start`: to run server

In the case that the server wasn't closed properly:
- `lsof -i TCP:<8000>`: to find the PID associated with whichever port the server is currently configured to listen on
- `kill -9 <PID>`: to stop listening on that port
- `npm run build`: to have webpack watch all changes
- `npm start`: to run server

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory: `npm install`

