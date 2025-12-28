---
title: "Cancelled Orders"
description: "Handling customer and captain cancellations in Reverse Bid"
---

# Cancelled Orders in Reverse Bid

This document explains **how the system handles cancellations**, whether initiated by customers or captains, and the impact on the Reverse Bid flow.

---

## 1. Customer Cancellations

- Customers can cancel **until the bid is assigned**.  
- Cancellation terminates all active bids for the order.  
- Notifications are sent to all affected captains.  

**Scenario Example:**  
- Customer places order → receives 3 bids → cancels before selection → bids marked `terminated` → captains notified.

---

## 2. Captain Cancellations

- Captains may cancel **post-assignment** due to unavailability.  
- System triggers **retry logic** to assign the order to the next eligible captain.  
- Customers are notified if reassignment affects delivery time.

**Scenario Example:**  
- Customer selects Captain B → Captain B cancels → system retries assignment to Captain C → customer receives updated ETA.

---

## 3. Impact on Metrics

- Cancellation rates are logged for **performance insights**:
  - Customer cancellation trends
  - Captain reliability metrics
- Helps optimize:
  - Bid timers
  - Retry attempts
  - Captain selection criteria

---

## 4. Notifications and Logging

- **Customer:** Order canceled confirmation.  
- **Captain:** Bid terminated or reassignment notifications.  
- **System Logs:** Detailed audit trail of all cancellations and actions taken.

---

> Next, we will cover **No-Bid Scenarios** (`no-bid-scenarios.md`) to describe cases when no captains submit bids and how the system responds.
