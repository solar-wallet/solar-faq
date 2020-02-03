---
title: Frequently Asked Questions
---
# Frequently Asked Questions

## I forgot my password for my wallet. What can I do?

If you have forgotten the password for your wallet, you can re-import your wallet with your secret key. If you have previously already backed up your secret key, you can go to “Account Settings” and choose “Merge or Delete Account”. Next, click “delete’ to confirm it (again, please double-check that you have backed up your secret key before deleting your wallet). 

Afterward, just import your account as usual: click “Add account”, choose “import existing” and paste your secret key to the blank. Click “Create account” to confirm it.

## I accidentally sent an incorrect payment. What can I do?

Every payment on the Stellar network is irretrievable. If you have sent a payment with a wrong amount or an incorrect memo, it is advisable to contact the receiver directly for a solution. 

If a payment is made to an exchange that should only be carried out with a memo, and Solar Wallet has nevertheless carried the transaction without a memo, please report it to us on solutions@solarwallet.io and report it to the receiver directly for a solution. 

## I have made a transaction but the receiver has not received it. What can I do?

While the Solar Wallet app provides a user-friendly wallet, we do not execute the transactions on our system. The underlying Stellar payment network is operated by several different organizations worldwide. Payments made on the Stellar network are not reversible. Only the receiver of your payment can provide you with a refund manually.  

To check if the transaction is carried out on the Stellar network, you can simply type in and check your wallet’s public key or the transaction ID on StellarExpert (https://stellar.expert/explorer/public). If the transaction is recorded the system, it must have been carried out correctly. If the balance on your Solar Wallet doesn’t update, try closing and re-opening the app. 

## I would like to import my old wallet to a new device. How can I do it?

Install Solar Wallet on your new device. Click “Add account”, choose “import existing” and paste your secret key to the blank. For security reasons, it is advisable to also create a password to protect your account. FInally, click “Create account” to confirm it.

## What should I do with the error messages?

> Transaction rejected by the network. Result code: tx_too_late

Description: while making a transaction, the error message “Transaction rejected by the network. Result code: tx_too_late” appears. 

This is a known bug in the official Stellar library – we are preparing a work-around right now. This can happen if you wait longer than 90s to approve a transaction (= enter your password if you have one) or if the local time on your device is wrong.

Normally it should still work even if your local time is wrong, but due to the bug I mentioned the transaction cannot be submitted if the time is off by more than 90s. Make sure the time on your phone is correct and the timezone matches your location.

> Transaction rejected by the network. Source or destination account balance would be below minimum balance.

Description: while making a transaction, the error message "Transaction rejected by the network. Source or destination account balance would be below minimum balance" appears. 

It means that you have too few XLMs in your wallet to execute this transaction. This problem can be solved by simply transferring some XLMs to your wallet.
