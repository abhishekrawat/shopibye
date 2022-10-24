# ShopiBye


### Participants

Github : @abhishekrawat

Twitter : @rawat899

Discord : Raw#3820

### Description

A Web storefront using NextJs and MedusaJs

### Preview
![](https://github.com/abhishekrawat/shopibye/blob/main/public/preview.gif)

## Set up Project

Here's how to setup and run the project locally :

### Prerequisites

Here are some pre-requisites that you may require to run the project on your system.

Prerequisites:

- Medusa CLI (```npm install -g @medusajs/medusa-cli```) .
- Redis (https://redis.io/)
- PostgreSQL (https://www.postgresql.org/)
- Node (https://node.org/)

### Install Project

Done with the pre-requisites?

Here are the steps to be taken after that :


1. Clone the repository:

```bash
git clone https://github.com/abhishekrawat/shopibye
```

1. Change directory and install dependencies:

```bash
cd shopybye
medusa new my-medusa-store --seed
cd my-medusa-store
medusa develop
cd ..
cd my-store-front && yarn
yarn dev
```

## Resources

Here are some technologies that were very useful throughout the process :

- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)

- [NextJs](https://nextjs.org/)
- [Readme.so](https://readme.so/editor)
