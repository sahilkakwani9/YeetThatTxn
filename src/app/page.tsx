"use client";
import React, { useState } from "react";
import {
  Connection,
  Transaction,
  VersionedMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";

const TxSenderPage = () => {
  const [serializedMessage, setSerializedMessage] = useState("");
  const [serializedTransaction, setSerializedTransaction] = useState("");
  const [status, setStatus] = useState("");
  const { sendTransaction, connected } = useWallet();
  const mainnetConnection = new Connection(
    "https://api.mainnet-beta.solana.com"
  );

  const handleDeserializeMessage = async () => {
    try {
      if (!serializedMessage) {
        setStatus("Please enter a serialized message");
        return;
      }
      const messageBuffer = Buffer.from(serializedMessage, "base64");
      const message = VersionedMessage.deserialize(messageBuffer);
      const transaction = new VersionedTransaction(message);
      console.log("transaction", transaction);

      const signature = await sendTransaction(transaction, mainnetConnection);
      setStatus(`Transaction sent! Signature: ${signature}`);
    } catch (error) {
      setStatus(`Error deserializing message: ${(error as Error).message}`);
    }
  };

  const handleDeserializeAndSendTransaction = async () => {
    try {
      setStatus("Processing...");
      if (!serializedTransaction) {
        setStatus("Please enter a serialized transaction");
        return;
      }
      if (!connected) {
        setStatus("Please connect your wallet first");
        return;
      }

      const transactionBuffer = Buffer.from(serializedTransaction, "base64");
      let transaction;

      try {
        transaction = VersionedTransaction.deserialize(transactionBuffer);
      } catch (e) {
        console.log("Falling back to legacy transaction", e);
        transaction = Transaction.from(transactionBuffer);
      }

      const signature = await sendTransaction(transaction, mainnetConnection);
      setStatus(`Transaction sent! Signature: ${signature}`);
    } catch (err) {
      setStatus(`Error sending transaction: ${(err as Error).message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">YeetThatTx</h1>
            <p className="mt-2 text-gray-600">
              Deserialize and send transactions easily.
            </p>
          </div>

          {/* Deserialize Message */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Serialized Message
            </label>
            <textarea
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md text-black"
              placeholder="Paste base64 encoded message..."
              value={serializedMessage}
              onChange={(e) => setSerializedMessage(e.target.value)}
            />
            <button
              onClick={handleDeserializeMessage}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
            >
              Deserialize Message & Send Transaction
            </button>
          </div>

          {/* Deserialize & Send Transaction */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Serialized Transaction
            </label>
            <textarea
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md text-black"
              placeholder="Paste base64 encoded transaction..."
              value={serializedTransaction}
              onChange={(e) => setSerializedTransaction(e.target.value)}
            />
            <button
              onClick={handleDeserializeAndSendTransaction}
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md"
            >
              Deserialize & Send Transaction
            </button>
          </div>

          {/* Status Display */}
          {status && (
            <div
              className={`mt-4 p-4 rounded-md ${
                status.includes("Error")
                  ? "bg-red-50 text-red-700"
                  : "bg-green-50 text-green-700"
              }`}
            >
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TxSenderPage;
