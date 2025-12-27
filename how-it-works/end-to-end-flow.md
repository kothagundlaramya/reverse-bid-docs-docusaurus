---
title: "End-to-End Flow"
description: "Step-by-step overview of Reverse Bid feature from order creation to captain assignment"
---

# End-to-End Flow of Reverse Bid

This section explains how a **Reverse Bid order is processed in Rapido** from the moment a customer books a ride until a captain is successfully assigned.

---

## 1. Order Creation

- Customer requests a ride via **Customer App**.
- App sends **POST /book** to **Customer App API**.
- The **Order Orchestrator** creates a new order in **Order Management**.
- **Pricing Engine** evaluates:
  - Fare estimate
  - Reverse Bid eligibility
  - Delay configurations (`startDelayTimeInMs`)

**Scenario Example:**  
- Customer requests a ride during peak hours → Pricing Engine determines Reverse Bid is **eligible** → System sets a 10-second delay before propagating to captains.

---

## 2. Reverse Bid Identification

- Order Management stores reverse bid configuration in **Orders DB**.
- Dispatcher is notified with the order and **reverse bid information**.
- Dispatcher updates **DispatchRecords DB** to track bid state.

**Key Points:**
- Customer consent is respected:
  - **Accepted** → Reverse Bid enabled
  - **Rejected** → Reverse Bid disabled
  - **No action** → System applies default behavior

---

## 3. Bid Chips Propagation

- Dispatcher fetches **bid chips** from Pricing Engine.
- Bids are propagated to **eligible captains** after the configured delay.
- Each bid chip contains:
  - Suggested fare
  - Start and expiry times
  - Maximum number of bids per captain

**Example:**  
- Customer opts in → Dispatcher sends bid chips: ₹120, ₹130, ₹140 → Captains A, B, C respond with their bids.

---

## 4. Customer Interaction

- Customer views all received bids in the app.
- Can **accept** a bid or ignore.
- Accepting triggers **auto-assignment** logic.
- Ignoring marks order as “customer busy” and Reverse Bid remains active until expiry.

**Example:**  
- Customer selects ₹130 → System attempts assignment to nearest eligible captain who bid ≤ ₹130.

---

## 5. Auto-Assignment and Retry

- System validates eligible captains:
  - Proximity
  - Bid amount ≤ accepted amount
  - Availability
- Auto-assigns the nearest eligible captain.
- If assignment fails:
  - Retry with next nearest captain
  - If all fail → Re-propagate the order with updated fare

**Example:**  
- Customer accepts ₹150 → Captain B is unavailable → System tries Captain C → Success.

---

## 6. Notifications and Updates

- Real-time notifications are sent:
  - **Customer:** Reverse Bid updates, assigned captain, expiry alerts
  - **Captain:** New bid request, assignment success/failure
- Dispatcher monitors **last accessed time** and reschedules notifications if needed.

---

## 7. Final Confirmation

- Once a captain is successfully assigned:
  - Order is updated in **Orders DB**
  - DispatchRecords DB reflects final status
  - Customer receives confirmation
  - Captains receive acknowledgment

**Scenario Example:**  
- Customer accepted bid → Captain assigned → App shows booking confirmation → Journey starts as usual.

---

> Next, we will dive into **Bidding Lifecycle** (`how-it-works/bidding-lifecycle.md`) explaining detailed bid propagation, updates, and acceptance handling for Reverse Bid.
