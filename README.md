# Trove-Developer-Challenge

An app for users to make valuable investments in stocks and shares.
It also gives users opportunity to take loans and afford them a payment plan over a period of 6 - 12 months.

The project is deployed at <https://trovy-loan.vercel.app>

Check out the project documentation [here](https://docs.google.com/document/d/1mipN8WBxK-ZAsGn84ofXJrxLMDZ2_8Wm/edit?usp=sharing&ouid=105260087143052705957&rtpof=true&sd=true)

## Getting started

### Prerequisites

- Node v14.x
- npm >= 6.14
- Git installed

### Running Locally

- Clone the repository. Run the following in your terminal

```bash
git clone https://github.com/tundealabi/trovy-web-app.git
cd trovy-web-app
yarn install
```

- In the root directory of the project create a **.env** file and copy the values from **.env.sample** and set the values of the variables correctly.
- To run locally you'll need
  - URI to a mongoDB server running in the cloud
  - Client keys and secret for nodemailer with gmail
  - Client keys and secret for authentication (next-auth)
  - Client key for paystack
- To run locally after setting the environment variables correctly.

  - To run in development mode

  ```bash
  yarn dev
  ```
