---
title: "Reverse Bid Summary"
description: "High-level recap of the Reverse Bid feature"
---

# Summary of Reverse Bid

This document provides a **concise overview** of the Reverse Bid feature, highlighting key concepts, flow, interactions, and system operations.

---

## 1. What is Reverse Bid?

- Reverse Bid is a **reverse marketplace mechanism** where captains compete to fulfill customer orders.  
- Customers can select the best bid based on price, estimated delivery time, and other factors.  
- Designed to **increase competitiveness, optimize pricing, and improve customer experience**.

---

## 2. Key Components

- **Dispatcher:** Handles bid propagation and assignment.  
- **Pricing Engine:** Suggests bid prices to captains.  
- **Bid Chips:** Discrete bid offers sent to captains.  
- **Auto-Assignment:** Automatically assigns order to winning captain.  
- **Retry Logic:** Ensures reliable assignment in case of failures.  
- **Notifications:** Real-time updates for customers and captains.

---

## 3. Bid Lifecycle Overview

1. **Pending:** Order created, awaiting consent.  
2. **Active:** Bids sent to captains; countdown timer running.  
3. **Selected:** Customer selects a bid or system auto-selects.  
4. **Expired / Terminated:** No bids received or flow ended prematurely.  
5. **Retries:** Failed assignments retried automatically before fallback.

---

## 4. Customer and Captain Interactions

- **Customers:** Opt-in for Reverse Bid, monitor live bids, select preferred bid, or cancel order.  
- **Captains:** Receive bid notifications, submit bids, accept or decline assignments, handle retries.  
- **Notifications:** Push and in-app updates ensure real-time awareness for both parties.

---

## 5. Edge Cases and Controls

- **Cancelled Orders:** Handled gracefully with notifications and retries.  
- **No-Bid Scenarios:** Trigger retries and fallback dispatch.  
- **Fraud & Abuse Controls:** Rate limiting, identity verification, anomaly detection, and audit logs maintain system integrity.

---

## 6. Metrics and Monitoring

- Bid acceptance rate, retry success, cancellation rate, and no-bid frequency tracked for optimization.  
- Helps refine bid timers, captain selection, and overall Reverse Bid efficiency.

---

## 7. High-Level Benefits

- **Improved Customer Experience:** Competitive pricing and transparent bid selection.  
- **Optimized Captain Utilization:** Encourages efficient assignment and fairness.  
- **Reliable Operations:** Retry logic and monitoring reduce failed assignments.  
- **Scalable & Secure:** Fraud controls and automated flows ensure trust and system reliability.

---

> This concludes the comprehensive documentation of Reverse Bid. All sections together provide a **full understanding of the feature, its interactions, and system operations**.
