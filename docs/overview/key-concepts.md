---
title: "Key Concepts"
description: "Core concepts for understanding Reverse Bid feature in Rapido"
---

# Key Concepts of Reverse Bid

Before diving into the technical flow, it is important to understand some **core concepts** that drive the Reverse Bid feature in Rapido.

---

## 1. Reverse Marketplace

- In a traditional ride assignment, the system auto-assigns a ride to the nearest available captain.
- **Reverse Bid creates a marketplace** where captains compete to accept a ride by submitting **bid amounts**.
- Customers **choose the bid** they prefer, creating a dynamic pricing and assignment model.

**Example:**  
- Customer requests a ride → Captains A, B, and C submit bids: ₹120, ₹130, ₹140 → Customer selects ₹130 → Captain B assigned.

---

## 2. Bid Chips

- **Bid Chips** are discrete fare suggestions shown to captains or customers during the bidding process.
- Represented as **predefined fare ranges** or suggested amounts.
- Captains use them to place competitive bids quickly.

**Example:**  
- Pricing engine suggests bid chips for a ride: ₹120, ₹130, ₹140.
- Captain selects a chip → System records bid → Customer sees all bids.

---

## 3. Customer Consent

- Reverse Bid is **opt-in**: customers must give consent to engage in bidding.
- Consent is shown via a **bottom sheet** when the customer requests a ride:
  - "Yes, I’m in" → Opt-in for Reverse Bid.
  - "No, I’ll wait" → Standard auto-assignment applies.
- Consent ensures customer control and legal compliance.

**Configurable options:**
- Auto-opt-in or auto-opt-out on inaction.
- Timer for consent (e.g., 10 seconds).

---

## 4. Dispatch and Order Orchestration

- **Order Orchestrator**: Handles order creation, persistence, and dispatch.
- **Dispatcher**: Responsible for propagating ride requests to captains and handling reverse bid flow.
- **Orders DB & DispatchRecords DB**: Store order and dispatch details, including bid history.

**Example:**  
- Customer books ride → Orchestrator creates order → Dispatcher triggers reverse bid propagation → Captains submit bids → System updates dispatch records.

---

## 5. Bid Lifecycle

1. Customer opts into Reverse Bid.
2. Captains receive **bid chips**.
3. Captains submit bids → System records bids.
4. Customer views multiple bids → Selects a preferred bid.
5. System auto-assigns nearest eligible captain based on bid amount.
6. Retry mechanism handles unavailable captains.
7. Accepted bid results in successful booking.

---

## 6. Notifications

- Customers and captains receive **real-time notifications**:
  - **Customer:** New bids, bid expiry, or assigned captain.
  - **Captain:** Available reverse bid requests, acceptance or rejection.
- Ensures **engagement and smooth communication** across the platform.

---

> Next, we will move to **how it works** section with end-to-end flow in `how-it-works/end-to-end-flow.md`.
