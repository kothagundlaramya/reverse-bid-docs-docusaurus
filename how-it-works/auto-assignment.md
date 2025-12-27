---
title: "Auto-Assignment"
description: "How Reverse Bid auto-assignment works for captain selection and retries"
---

# Auto-Assignment in Reverse Bid

Auto-assignment ensures that **once a customer accepts a Reverse Bid**, the system selects the **most suitable captain** and handles retries if assignment fails.

---

## 1. Triggering Auto-Assignment

- Auto-assignment is triggered when:
  1. Customer **accepts a Reverse Bid** on the app.
  2. System detects **no eligible captain** from initial bid propagation (optional retry logic).
- Dispatcher consults **DispatchRecords** and **PropagationRecords** to identify available captains.

**Example:**  
- Customer accepts ₹130 → Dispatcher fetches eligible captains who quoted ≤ ₹130.

---

## 2. Captain Selection Logic

1. Filter captains:
   - Status: available & within active radius
   - Reverse Bid slots not exceeded
   - Not engaged in another Reverse Bid

2. Sort captains:
   - Primary: **Proximity to customer**
   - Secondary: **Bid amount** (lowest to highest if multiple bids are eligible)
   - Tertiary: **ETA or FM buffer** if needed

3. Attempt assignment:
   - Dispatcher calls Captain App (via RCM or API)
   - If captain confirms → assignment complete
   - If captain declines or unavailable → try next nearest captain

---

## 3. Retry Mechanism

- If no captain accepts on first attempt:
  - Dispatcher **repropagates order** with updated bid (accepted bid + optional buffer)
  - Retry respects:
    - Max attempts per order
    - Configurable **retry delay**
    - Captain eligibility rules

**Example:**  
- Customer accepted ₹120 → Captain A unavailable → Dispatcher retries with Captain B → success.  
- If all fail → system triggers **order re-propagation** with updated fare.

---

## 4. Integration with Existing Dispatch Flow

- Auto-assignment is designed to **coexist with standard dispatch**:
  - Standard bids continue in parallel unless customer interacts with Reverse Bids.
  - Dispatcher **terminates expired or completed Reverse Bids** to avoid conflicts.

**Example:**  
- Customer ignored Reverse Bids → standard dispatch continues automatically.  
- Customer accepts → standard dispatch paused for that order.

---

## 5. Domain Events & Metrics

- Dispatcher emits domain events for:
  - Bid accepted
  - Assignment success/failure
  - Retry triggered
  - Re-propagation
- Metrics help in:
  - Tracking **captain utilization**
  - Monitoring **assignment success rate**
  - Optimizing **retry intervals** and **bid configurations**

---

## 6. Edge Considerations

- Partial acceptance:
  - Customer selects **2nd or 3rd highest bid** → system auto-assigns eligible captains for that specific amount.
- Customer busy / ignored:
  - Reverse Bid remains active until expiry → metrics captured for engagement.
- Failed assignment:
  - Automatic fallback to re-propagation or standard dispatch.

---

> Next, we will cover **Pricing & Selection Logic** (`pricing-and-selection-logic.md`) to explain how the system calculates recommended bids and applies selection criteria for captains.
