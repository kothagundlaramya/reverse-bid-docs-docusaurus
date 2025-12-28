---
title: "Captain Experience"
description: "How captains engage with the Reverse Bid feature"
---

# Captain Experience with Reverse Bid

This document explains **how captains interact with Reverse Bids**, from receiving bids to updates, auto-assignment, and handling cancellations.

---

## 1. Receiving Bids

- Captains receive **Reverse Bid notifications** in real-time.
- Notification contains:
  - Order details (pickup & drop locations, package type)
  - Bid expiry timer
  - Minimum bid requirements

**Scenario Example:**  
- Captain A receives a new Reverse Bid → sees order ₹120–₹140 → 10s countdown timer begins.

---

## 2. Submitting Bids

- Captains can:
  - **Accept a bid chip** (submit price for customer)
  - Ignore if unavailable or uninterested
- Multiple simultaneous bids allowed (configurable max 3 active bids per captain)

**Key Status Updates:**
- `available` → Bid visible to captain
- `requested` → Captain actively bidding
- `accepted` → Customer chooses this bid
- `expired` → Bid expired without acceptance
- `terminated` → Bid ended due to reassignment or order closure

---

## 3. Auto-Assignment

- Captains may receive **automatic assignment** based on:
  - Proximity to pickup location
  - Past performance and rating
  - Availability status

**Example:**  
- Customer selects ₹130 bid → system auto-assigns Captain B → notification sent: “Order assigned”.

---

## 4. Bid Updates & Notifications

- Captains receive real-time updates:
  - Customer accepts/rejects bid
  - Bid redispatch to other captains
  - Assignment failures or retries

**Technical Note:**  
- Notifications use **WebSockets** for immediate updates
- Push notifications ensure captains are informed even if app is in background

---

## 5. Handling Cancellations

- If a customer cancels before assignment → bid marked **terminated**
- If captain cancels post-assignment → **retry logic** triggers reassignment to another eligible captain
- System tracks cancellation metrics for performance insights

---

> Next, we will cover **Notifications** (`notifications.md`) to explain the flow of alerts for customers and captains.
