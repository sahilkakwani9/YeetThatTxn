# YeetThatTx - Solana Transaction Tool

## Overview

YeetThatTx is a web-based tool that allows users to deserialize and send Solana transactions easily. It supports both versioned and legacy transactions, as well as message deserialization.

## Features

- **Deserialize Messages**: Input a base64-encoded Solana message and decode it.
- **Deserialize Transactions**: Handles both versioned and legacy transactions.
- **Send Transactions**: Send deserialized transactions to the Solana blockchain.
- **Wallet Integration**: Uses Solana Wallet Adapter for seamless transaction signing.

## Tech Stack

- **Frontend**: React.js (Next.js Client Components)
- **Solana SDK**: `@solana/web3.js`
- **Wallet Adapter**: `@solana/wallet-adapter-react`

## Getting Started

### Prerequisites

- Node.js (>=16)
- Yarn or npm
- Solana wallet (Phantom, Solflare, etc.)

### Installation

```sh
# Clone the repository
git clone https://github.com/sahilkakwani9/YeetThatTx.git
cd YeetThatTx

# Install dependencies
yarn install  # or npm install
```

### Running the Project

```sh
yarn dev  # or npm run dev
```

Open your browser and go to `http://localhost:3000`.

## Usage

1. **Deserialize a Message**

   - Paste a base64-encoded message in the "Serialized Message" input field.
   - Click "Deserialize Message & Send Transaction" to sign and send it using your connected wallet.

2. **Deserialize & Send a Transaction**
   - Paste a base64-encoded transaction in the "Serialized Transaction" field.
   - Click "Deserialize & Send Transaction" to sign and send it using your connected wallet.
   - The app will attempt to deserialize using `VersionedTransaction.deserialize` first, and fall back to `Transaction.from` if needed.

## Troubleshooting

- If the transaction fails to deserialize, ensure that it is correctly encoded in base64.
- If the wallet is not detected, make sure your wallet extension is installed and connected.

## Contributions

Feel free to fork the repository and submit pull requests with improvements.
