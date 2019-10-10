# Node Send SMS During Call Tutorial

This project serves as a guide to help you build an application with Persephony. Specifically, the project will:

- Accepts incoming calls
- Sends text messages to callers   

## Setting up your new app within your Persephony account

To get started using a persephony account, follow the instructions [here](https://persephony-docs.readme.io/docs/getting-started-with-persephony).

## Setting up the Send SMS During Call Tutorial

1. Install the node packages necessary using command:

   ```bash
   $ yarn install
   ```

2. Configure environment variables (this tutorial uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE            | DESCRIPTION                                                                                                                                                                             |
   | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | accountId              | Account ID which can be found under [API Keys](https://www.persephony.com/dashboard/portal/account/authentication) in Dashboard                                                         |
   | authToken              | Authentication Token which can be found under [API Keys](https://www.persephony.com/dashboard/portal/account/authentication) in Dashboard                                               |
   | HOST | The url of where your app is being hosted (e.g. yourHostedApp.com) |

## Runnning the Tutorial

1. Run the application using command:

   ```bash
   $ node sendSMSDuringCall.js
   ```

