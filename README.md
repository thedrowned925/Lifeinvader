# LifeAdmin

LifeAdmin is a mobile life-management app focused on quietly handling recurring personal admin: warranties, renewals, subscriptions, receipts, maintenance dates and important documents.

The product principle is simple: **Scan → Understand → Organize → Remind.**

There is no chat-style AI surface in the app. Intelligence is treated as infrastructure: the app should infer what a document is, extract useful dates and amounts, suggest the right record type, and create reminders with as little manual input as possible.

## Stack

- Expo SDK 57
- React Native 0.86
- React 19.2
- Expo Router
- TypeScript
- Local-first data architecture
- Expo SQLite for persistence
- Expo Notifications for reminders
- Expo Camera for document capture

## Product direction

The initial MVP is intentionally narrow:

1. Capture or import a receipt/document.
2. Infer whether it represents a warranty, subscription, bill, insurance/contract, identity document, or maintenance record.
3. Extract likely dates, amounts and merchant/provider information.
4. Save a normalized life record.
5. Schedule useful local reminders.
6. Show all upcoming obligations on a high-quality dashboard.

## Development

```bash
npm install
npm run start
```

Node.js 22.13+ is recommended for Expo SDK 57.

## Status

Early product foundation / UI prototype. The autonomous document pipeline is represented by a local `lifeEngine` rule layer first, with on-device OCR/document intelligence intended as the next milestone.
