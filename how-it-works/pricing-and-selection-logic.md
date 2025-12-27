---
title: "Pricing and Selection Logic"
description: "How fare estimates and captain selection logic work in Reverse Bid"
---

# Pricing & Selection Logic in Reverse Bid

Pricing and selection logic ensures **customers see relevant bid options**, and captains are assigned efficiently while maintaining profitability and fairness.

---

## 1. Fare Estimate Calculation

- **Pricing Engine** provides fare estimates and Reverse Bid eligibility during order creation.
- Fare estimates include:
  - Base fare
  - Surge or demand multiplier
  - Customer consent for Reverse Bid
- Configuration options include:
  - **Start Delay Time** (before Reverse Bid starts)
  - **Maximum number of bid slots** (default 3)
  - **Expiration timer** for bids (default 10 seconds)

**Example:**  
- Customer books a ride → Pricing Engine returns ₹100 estimate → Reverse Bid enabled → Dispatcher schedules bid propagation after 10s.

---

## 2. Bid Recommendation Logic

- Dispatcher calls Pricing Engine for **recommended bid amounts**:
  - Based on historical captain acceptance, availability, and location
  - Takes into account:
    - Market conditions
    - Supply-demand ratio
    - FOMO or ORB orders

- Recommended bids are **returned as a sorted array**:
  ```json
  {
    "recommendedBids": [120, 130, 140]
  }
## 3. Captain Selection Criteria

- When a customer accepts a bid, Dispatcher filters eligible captains:

   - Active and available captains

   - Within maximum distance from customer

   - Not exceeding max parallel Reverse Bids

   - Matching the bid amount ≤ customer-accepted price

       - Sorting logic:

           - Nearest captain first

           - Lowest bid among eligible captains

           - ETA and FM buffer if tie occurs

**Example:**

- Customer accepts ₹130 → Eligible captains: A(₹120, 2km), B(₹130, 1.5km) → Dispatcher assigns nearest, Captain B (1.5km).

## 4. Bid Expiry & Buffer

- Each bid has a time-to-expire, default 10s.

- Buffer time ensures fairness:

   - Prevents stale bids from being assigned

   - Ensures captains have time to respond

- Configuration:

   - reverseBid.startDelayTimeInMs

   - maxTimeForCustomerAcceptInMs

    - bufferTimeInMs (added to expiry)

## 5. Integration with Dispatcher

- Dispatcher maintains DispatchRecords and PropagationRecords:

    - Tracks current status of bids

    - Stores bid recommendations for reference

- Scheduler triggers callbacks for:

   - Sending bid recommendations to captains

   - Notifying customers if bids expire or new bids arrive

## 6. Data Capture for Analytics

- Metrics captured at backend:

   - Bid impressions per customer

   - Number of bids accepted / ignored

   - Time taken to accept a bid

   - Captain acceptance rates

- Enables PM and ops teams to optimize Reverse Bid configuration.

> Next, we will cover **Customer Experience**(`customer-experience.md`) to explain how customers interact with bids in real-time.