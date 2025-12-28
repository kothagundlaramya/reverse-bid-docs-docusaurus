---
title: "Customer Experience"
description: "How customers interact with the Reverse Bid feature"
---

# Customer Experience with Reverse Bid

This document explains **how customers engage with the Reverse Bid feature**, including consent, bid visibility, and real-time interactions.

---

## 1. Customer Consent

- Customers are prompted to **opt-in for Reverse Bid** when placing an order.
- Consent ensures:
  - Customers are aware captains will compete for their delivery
  - Customers agree to automated bid selection

**Example:**  
- Customer places an order → app shows “Enable Reverse Bid for best price?” → customer taps “Yes” → order enters bidding window.

---

## 2. Bid Visibility

- Customers see **active bids in real-time**:
  - Lowest bid price
  - Number of bids received
  - Estimated captain arrival times

**UI Behavior:**
- Live countdown timer shows remaining bid time
- Bids update dynamically as captains submit offers
- Customer can refresh or wait for auto-update

---

## 3. Customer Actions

- **Accept a bid:** Confirms order; triggers auto-assignment to captain  
- **Ignore bid:** No action; bid expires, default assignment logic triggers  
- **Cancel order:** Allowed until assignment is complete; cancels all active bids

**Scenario Example:**  
- 3 bids received: ₹120, ₹130, ₹140  
- Customer selects ₹130 → system auto-assigns captain → confirmation sent to customer

---

## 4. Notifications to Customers

- **Bid start:** App push notification
- **Bid update:** Lowest bid updates or new bid arrival
- **Bid end:** Selected bid confirmation
- **Order cancellation:** Customer-initiated or system fallback

**Technical Note:**  
- Notifications sent via **push (FCM)** and in-app updates via **WebSockets** for low latency

---

## 5. Real-Time Interaction Highlights

- Customers are **actively aware of bid progress**
- Any change in bids or assignment reflects immediately in the app
- Ensures **transparent pricing and improved trust**

---

> Next, we will cover **Captain Experience** (`captain-experience.md`) to explain how captains receive bids, interact, and handle auto-assignment.
