---
title: Multi-Signature Accounts
---
# Multi-Signature

## Enable Multi-Sig Feature

1. Go to main settings (on the home view, click the “setting” icon on the top right corner).

![null](/images/settings-button.png)

2. Toggle the switch next to "Enable Multi-Signature Features". Now the multi-signature features are available on all accounts.

## Make Account Multi-Sig

1. Go to the relevant account and go to settings (click the “setting” icon on the top right corner on the account overview).
2. Select "Manage Signers".
3. Select "Add Co-Signer" on the top right corner of the page.
4. Add the public key of the co-signer and enter the number of required co-signers for every transaction.
5. Select "Apply Changes" to confirm it.

![null](/images/blue-3.png)

::: tip
"Required signatures" mean the number of accounts needed to authorize a transaction. For example, this could be 3/4 for an account that requires 75% approval to make a transaction.
:::

5. To remove a co-signer, simply select the "cross" icon next to the public key of the co-signer. Only the owner of the mult-sig account can remove/add co-signers.

## Create Multi-Sig Transaction

1. Follow the normal procedure to [send payment](./04-wallet-guide.html#send-payment).
2. Owners of the co-signer account(s) should go to the account page and look for "Transactions to co-sign". Identify the particular transaction and select "Review". If there is a password, type in password and press enter to authorize the transaction. If not, simply click "Confirm" to authorize the payment. 

![null](/images/screen-shot-2019-03-05-at-15.24.05.png)

1. After the required number of signatures have been made, the transaction will be executed.
