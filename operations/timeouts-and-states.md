---
title: "Timeouts and States"
description: "Lifecycle management and state transitions in Reverse Bid"
---

# Timeouts and States in Reverse Bid

This document explains **the lifecycle of a Reverse Bid**, including timeouts, state transitions, and their impact on customer and captain interactions.

---

## 1. Key States

Reverse Bid orders progress through several states:

- **Pending**  
  - Order created, waiting for customer consent or initial bid propagation.
- **Active**  
  - Bids are being sent to eligible captains; countdown timer running.
- **Selected**  
  - Customer has accepted a bid or system auto-selected a winning bid; order assigned.
- **Expired**  
  - No valid bids received within timer; may trigger retries or fallback to standard dispatch.
- **Terminated**  
  - Bid flow ended prematurely due to cancellation, reassignment, or system override.

**Scenario Example:**  
- Customer opts-in → bids propagated → no acceptance in 10s → state changes from **Active → Expired** → system triggers retry.

---

## 2. Timeouts

Timeouts ensure timely progression of the bid lifecycle:

- **Bid Timer:**  
  - Limits how long captains can submit bids (default 10s).  
- **Assignment Timer:**  
  - Maximum time allowed to assign the selected bid to a captain.  
- **Customer Response Timeout:**  
  - Time allowed for customer consent or bid selection before default handling.

**Example:**  
- Bid timer = 10s  
- Assignment timer = 5s  
- Customer does not respond → system auto-selects best bid or triggers fallback.

---

## 3. State Transitions

- **Pending → Active:** Customer consents; bids sent.  
- **Active → Selected:** Customer accepts bid or auto-selection occurs.  
- **Active → Expired:** No bids accepted in bid timer.  
- **Selected → Terminated:** Captain cancels post-assignment; retry logic triggers.  
- **Expired → Retry / Fallback:** System attempts reassignment or escalates to manual dispatch.

**Visual Example:**  
- Pending → Active → Selected → Terminated↘ Expired → Retry/  Fallback


---

## 4. Monitoring and Alerts

- Each state transition is logged for:
  - Analytics dashboards
  - Metrics tracking (bid success rate, retries, cancellations)
  - Troubleshooting failed assignments

- Alerts sent to operations team if abnormal timeouts or state transitions occur.

---

> Next, we will cover **Failure Handling** (`failure-handling.md`) to explain how the system deals with failed assignments, cancellations, and retries.
