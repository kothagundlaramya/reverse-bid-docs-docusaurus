---
title: "Introduction"
description: "High-level overview of Reverse Bid feature in Rapido"
---

# Reverse Bid Feature Overview

**What is Reverse Bid?**  
Reverse Bid enables a **reverse marketplace** for ride bookings in Rapido. Instead of orders being automatically assigned to the nearest captain, captains actively bid to accept a ride, giving the customer the power to choose among multiple quotes.

**Why this feature matters**  
Before Reverse Bid, all ride requests followed the standard auto-assignment flow. This could lead to:
- Missed opportunities for captains to compete for fares.
- Less transparency in pricing for customers.
- Inflexibility in capturing dynamic demand-supply scenarios.

Reverse Bid introduces a **dynamic and competitive ecosystem**, optimizing both captain earnings and customer satisfaction.

---

## Real-time Scenario in Rapido

**Scenario:** A customer requests a ride from **MG Road to Whitefield in Bangalore** during peak evening hours.

1. Customer opens the Rapido app and taps **"Request Ride"**.
2. Reverse Bid consent bottom sheet appears:
   - "Yes, I’m in" → Customer opts for reverse bidding.
   - "No, I’ll wait" → Customer follows standard auto-assignment.
3. Once the customer consents:
   - Captains within the vicinity (e.g., 3–5 km radius) receive **bid chips** showing suggested fare ranges.
   - Captains submit their bids with the fare they are willing to accept.
4. Customer sees multiple bids in the app:
   - Example: ₹120 from Captain A, ₹130 from Captain B, ₹140 from Captain C.
5. Customer selects a bid:
   - The system automatically assigns the nearest captain with the chosen bid amount.
   - If the assigned captain is busy, the system retries with the next nearest eligible captain.

**Benefits observed in this scenario:**
- Customer can choose the most attractive fare.
- Captains are incentivized to bid competitively.
- The platform captures real-time market supply and demand efficiently.

---

## Key Points

- Reverse Bid can be **opted-in or opted-out** by the customer.
- Captains see **bid chips** with configurable fare suggestions.
- Auto-assignment after bid acceptance ensures **fast and reliable booking**.
- The system handles **retry logic** automatically if the first captain is unavailable.
- Notifications and UI cues keep both customer and captains informed in real-time.

---

> Next, we will explain **why Reverse Bid was introduced** and the problem it solves in `problem-statement.md`.
