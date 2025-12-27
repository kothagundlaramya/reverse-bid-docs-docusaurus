---
title: "Glossary"
description: "Key terms and definitions used in Reverse Bid"
---

# Glossary of Terms in Reverse Bid

This document defines **important terms** used in the Reverse Bid feature to ensure clarity for PMs, engineers, and operations teams.

---

## 1. Reverse Bid

A **reverse marketplace mechanism** where captains bid for customer orders, allowing the customer to choose the most suitable bid based on price, ETA, and other factors.

---

## 2. Dispatcher

System component responsible for **propagating bids** to eligible captains, monitoring bid lifecycle, and handling retries and assignments.

---

## 3. Bid Chip

A **discrete bid offer** sent to a captain, including:
- Suggested price
- Expiry timer
- Slot information

---

## 4. Auto-Assignment

Automated system logic that assigns a customer order to a **winning captain** based on bid selection, availability, and eligibility rules.

---

## 5. Retry Logic

Mechanism that **retries failed assignments** to captains, applying exponential backoff and fallback strategies to ensure order fulfillment.

---

## 6. Bid Lifecycle States

- **Pending:** Awaiting customer consent or bid propagation  
- **Active:** Bids are live, awaiting captain response  
- **Selected:** Winning bid chosen; assignment in progress  
- **Expired:** No valid bids received; triggers retry/fallback  
- **Terminated:** Bid ended prematurely due to cancellation or reassignment

---

## 7. FE / RR / Dispatch

- **FE:** Front-End (app or web interface interacting with customers/captains)  
- **RR:** Reverse Request or Reverse Routing (internal tracking of reverse bids)  
- **Dispatch:** System process for assigning orders to captains

---

## 8. Metrics

Key measurements used to monitor performance:
- Bid acceptance rate
- Retry success rate
- Cancellation rate
- No-bid frequency

---

> Next, we will cover **FAQs** (`faq.md`) to address common questions about Reverse Bid flow.
