---
title: "No-Bid Scenarios"
description: "Handling situations where no captains submit bids in Reverse Bid"
---

# No-Bid Scenarios in Reverse Bid

This document explains **what happens when no captains submit bids**, potential causes, and how the system ensures orders are still fulfilled.

---

## 1. Common Causes

- **Low captain availability** in the order area.  
- **Tight deadlines** or short bid windows.  
- **High minimum bid thresholds** deterring captain participation.  
- **Network or app issues** affecting captain notifications.

**Scenario Example:**  
- Customer places an order in a low-activity area → 0 captains respond within 10 seconds → no bids received.

---

## 2. System Handling

1. **Retry Mechanism**  
   - Retry propagation to next eligible captains.  
   - Can expand **radius** or relax bid thresholds to improve chances.

2. **Fallback to Standard Dispatch**  
   - If retries fail, order assigned via regular dispatch flow.  
   - Ensures customer receives timely delivery.

3. **Customer Notification**  
   - Inform customer that no bids were received.  
   - Optionally allow customer to extend bid window.

---

## 3. Metrics and Monitoring

- Track **no-bid frequency** per region and time of day.  
- Identify patterns causing low bid response:  
  - Peak hours  
  - Areas with low captain density  
- Optimize bid timers, minimum bid thresholds, and captain incentives.

**Example Metrics:**  
- No-bid rate = 2% orders/day  
- Average retry success = 85% of no-bid cases  

---

> Next, we will cover **Fraud and Abuse Controls** (`fraud-and-abuse-controls.md`) to explain how the system prevents misuse of Reverse Bid.
