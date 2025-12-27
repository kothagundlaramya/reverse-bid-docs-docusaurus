---
title: "Bidding Lifecycle"
description: "Detailed flow of Reverse Bid from bid generation to customer interaction"
---

# Bidding Lifecycle in Reverse Bid

This document explains how Reverse Bid works **from dispatch to customer acceptance**, including updates, retries, and captain interactions.

---

## 1. Bid Generation

- After order creation and customer consent, the **Dispatcher** requests recommended bid amounts from the **Pricing Engine**.
- Bids are grouped and **propagated to eligible captains**.
- Each bid contains:
  - Price suggested by captain
  - Expiry time (configurable, default 10s)
  - Slot information (max 3 active bids by default)
  
**Example:**  
- Dispatcher requests bids → Pricing Engine returns `[₹120, ₹130, ₹140]` → Captains A, B, C receive bid chips.

---

## 2. Bid Propagation to Captains

- Dispatcher checks **existing dispatch rules** and **Reverse Bid configuration**.
- Eligible captains receive bids:
  - Only captains within **active radius** and available status
  - Respect maximum parallel bids per captain

**Scenario Example:**  
- Captain D is currently on another Reverse Bid → excluded from this propagation.

---

## 3. Captain Response

- Captains can **accept a bid chip** or ignore.
- Captains’ responses are updated in:
  - **DispatchRecords DB**
  - **PropagationRecords DB**

**Key Statuses:**
- `available` → Bid is visible
- `requested` → Captain requested Reverse Bid
- `accepted` → Customer accepted bid
- `rejected` → Customer rejected bid
- `expired` → Bid expired without customer action
- `terminated` → Bid ended due to re-propagation or order closure

---

## 4. Customer Interaction

- Customer sees **Reverse Bids** on the app.
- Actions:
  - Accept a bid → triggers auto-assignment
  - Ignore → marks order as “customer busy”
  - No action → expiry timer applies, triggers default handling

**Example:**  
- Customer sees 3 bids → selects ₹130 → Dispatcher triggers auto-assignment to eligible captains.

---

## 5. Bid Updates

- Captains can update bids in response to **customer interactions** or **system redispatch**.
- Dispatcher propagates updated bids:
  - Ensures only **eligible active captains** receive updates
  - Updates **Redis cache** and DB records for tracking
  - Terminates previous bids if needed

---

## 6. Expiry & Termination

- Bids expire automatically after configured delay (`startDelayTimeInMs` + buffer).
- Dispatcher handles:
  - Expired bids → mark as `expired`
  - Redispatch or retry with new eligible captains
- System emits **domain events** for tracking and analytics.

**Scenario Example:**  
- Bid ₹120 not accepted within 10s → marked expired → next eligible captain considered for re-propagation.

---

## 7. Metrics & Monitoring

- System tracks:
  - Bid impressions and clicks (customer engagement)
  - Captain acceptance and rejection rates
  - Redispatch success/failure
- Data helps optimize **slot count**, **expiry timers**, and **pricing recommendations**.

---

> Next, we will cover **Auto-Assignment** (`auto-assignment.md`) to explain how the system chooses captains, retries on failure, and handles customer acceptance scenarios.
