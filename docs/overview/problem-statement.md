---
title: "Problem Statement"
description: "Why Reverse Bid feature was needed in Rapido"
---

# Problem Statement

Before implementing **Reverse Bid**, Rapido’s ride assignment followed a **strict auto-assignment model**. While efficient in normal conditions, this approach had several limitations:

---

## Challenges in the Existing System

1. **Limited Pricing Flexibility**
   - Fares were fixed by the system’s pricing engine.
   - Customers had no option to select a preferred fare.
   - Captains could not compete to increase earnings.

2. **Underutilized Supply**
   - Captains sometimes declined rides due to low fare or demand mismatch.
   - Auto-assignment skipped these opportunities, leaving supply underutilized.

3. **Customer Dissatisfaction**
   - Customers occasionally faced longer wait times when the nearest captain was unavailable.
   - Lack of fare options limited customer choice and transparency.

4. **No Dynamic Market Response**
   - During peak hours or special events, auto-assignment could not adjust dynamically to market conditions.
   - The system lacked a mechanism to balance demand and supply efficiently in real-time.

---

## Real-time Rapido Example

**Scenario:** Friday evening, MG Road to Whitefield during peak hours.  

- **Before Reverse Bid:**  
  - Customer requests a ride → System auto-assigns Captain A (3 km away).  
  - Captain A is busy → Order retries → Captain B (5 km away) assigned.  
  - Result: Longer wait time, customer frustration.

- **Problem:**  
  - System missed opportunity for Captain C (nearby) to bid ₹5 higher and accept the ride.  
  - Customer never had a choice to pick the fare.

---

## Why Reverse Bid Solves This

- Creates a **reverse marketplace** where captains actively compete for rides.
- Customers can choose **preferred fare and captain**, improving transparency.
- System dynamically **optimizes assignments** to nearest available captain who bid competitively.
- Enhances **supply utilization** and customer satisfaction.

---

> Next, we will define **key concepts** such as Reverse Marketplace, Bid Chips, Customer Consent, and Dispatch in `key-concepts.md`.
