---
title: Solar Wallet Guide
---
# Solar Wallet Guide

## Account Management

### Create Stellar Account

1. Select "Add new".

![null](/images/choose-an-account.png)

2. Click on the field near the "pen" icon and type in the name you want for your account. Create a password and repeat it in the blanks (optional, but highly recommended). Select "Create Account" to confirm it.

::: warning
We cannot recover your password! So please make sure you can remember it.
:::

![null](/images/rename-again.png)

3. Your account is now ready for receiving payments! Select "Receive" to find the public key of your account.

### Import Account

1. Select “Add new”.
2. Name your account by typing in the field near the “pen icon”. Create a password and repeat it in the blanks (optional, but highly recommended!). Click the toggle switch button near “Import Existing” and type in your secret key in the blank below. Select "Import Account" to confirm it.

![null](/images/rename-again.png)

### Export Secret Key

1. Go to the relevant account.

![null](/images/screen-shot-2019-02-26-at-13.08.11.png)

1. Select the “three-dots” button on the top right corner of the window to open the account menu. Select “Export Secret Key”.
2. Type in your password in the blank and select the button “Click to Reveal Your Secret Key”. If you do not have a password, simply select the button “Click to Reveal Your Secret Key”.

![null](/images/mejor.png)

4. Your secret key is revealed in plaintext. Please keep this text safe as this unencrypted secret key gives anybody access to your funds.

### Remove Password

1. Go to the relevant account.
2. Select the “three-dots” button on the top right corner of the window to open the account menu.
3. Select “Change password”.
4. On the bottom left corner of the small window, click the toggle switch next to “Remove password”.
5. Type in your current password and select “Remove Password” to confirm the removal of your password.

### Account View

![null](/images/with-blurss.png)

## Payments

### Receive Payment

1. Go to the relevant account.
2. Select “Receive”

![null](/images/screen-shot-2019-02-18-at-10.35.36.png)

3. Your public key is written under the QR code. Click it to copy it. Send this public key to the entity/person you would like to receive a payment from. You can also scan the QA code with another Stellar wallet.

![null](/images/blur-2.png)

### Send Payment

1. Go to the relevant account.
2. Select the send button.

![null](/images/screen-shot-2019-02-18-at-10.35.36.png)

3. Fill in the destination address of the recipient
4. Add the amount and select the asset you want to send. 
5. Optionally, you can also include a text or an ID for your transaction by choosing “Text” or “ID” respectively under "Memo type" and then fill in the relevant information. Click “SEND”.

![null](/images/screen-shot-2019-02-26-at-13.00.17.png)

4. Fill in your password and click “Confirm” to proceed with your payment. If you don’t have a password, simply click “Confirm” to make the payment.

## Multi-Signature Account

### Enable Multi-Sig Feature

1. Go to the main settings menu.
2. Click the toggle switch next to "Enable Multi-Signature Features" to activate.

### Make Account Multi-Sig

1. Go to the relevant account. 
2. Settings > "Manage Signers".
3. Select "Add Co-Signer" on the top right corner of the page.
4. Add the public key of the co-signer and enter the number of required co-signers for every transaction. Select "Apply Changes" to confirm it.

![null](/images/blue-3.png)

::: tip
"Required signatures" mean the number of accounts needed to authorize a transaction. For example, this could be 3/4 for an account that requires 75% approval to make a transaction.
:::

5. To remove a co-signer, simply select the "cross" icon next to the public key of the co-signer. Only the owner of the mult-sig account can remove/add co-signers.

### Create Multi-Sig Transaction

1. Under construction

## Asset Management

To learn about assets, go to the [Stellar section](/guide/02-stellar-guide.html#about-stellar)

### Add EURT/USD/CNY

1. Go to the relevant account.
2. Settings > "Manage Assets".
3. Select the asset you would like to trust. Then, select “trust asset”.

![null](/images/screen-shot-2019-02-26-at-13.05.35.png)

4. Type in the password of your account and select “confirm”. If you don't have a password, skip this step.

You are now ready to trade the asset which you have trusted.

### Add Custom Assets

1. Go to the relevant account.
2. Settings > "Manage Assets".
3. Select "Add Custom Asset" on the top right corner of the window.
4. Put in the code, issuer (issuing account public key) and limit (maximum balance to hold). Select "Trust Asset" to confirm.

![null](/images/screen-shot-2019-02-26-at-09.37.19.png)

You are now ready to receive/send/trade the asset which you have trusted.

## DEX

### Trade view

### Make a Trade

## Testnet

To learn about assets, go to the [Stellar section](/guide/02-stellar-guide.html#about-stellar)

### Enable Testnet features

1. Go to main settings (select the “setting” icon on the top right corner)

![null](/images/setting-buttons.png)

2. Click the toggle switch next to "Show Testnet Accounts" to activate the testnet option.
3. Select the arrow next to "Settings" to go back to the main page.
4. Now when you're back on the main page, the button "Switch to Testnet" would appear next to the setting button. Select "Switch to Testnet" to go to testnet.
5. To go back to "mainnet" or to leave testnet, select the "Switch to Mainnet" button next to the setting button.

### Friendbot

Friendbot is a tool on the Stellar testnet, which gives you free testnet lumens. Friendly, indeed.
