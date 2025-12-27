---
title: "FAQ"
description: "Frequently asked questions about Reverse Bid"
---

# Frequently Asked Questions (FAQ) – Reverse Bid

This document addresses **common questions** regarding Reverse Bid from customers, captains, and internal teams.

---

## 1. What is Reverse Bid?

**Answer:**  
Reverse Bid is a feature where captains compete for customer orders, and the customer can choose the most suitable bid based on price, ETA, and other factors.

---

## 2. How long does a bid stay active?

**Answer:**  
Each bid has a **configurable expiry timer**, typically 10 seconds. Customers must select a bid within this window, otherwise the system applies default assignment logic.

---

## 3. What happens if no captains submit a bid?

**Answer:**  
- The system retries by sending the bid to the next set of eligible captains.  
- If still no bids are received, the order falls back to the **standard dispatch flow**.  
- Customer is notified if no bids were received.

---

## 4. Can a customer cancel an order during bidding?

**Answer:**  
Yes. Customers can cancel until a bid is selected or assignment occurs. All active bids are terminated, and captains are notified.

---

## 5. How does auto-assignment work?

**Answer:**  
Auto-assignment chooses the winning captain based on:
- Customer-selected bid (if manual)  
- Captain proximity and availability  
- Historical performance and rating  
- System fallback rules in case of assignment failure

---

## 6. How are retries handled?

**Answer:**  
If assignment to a captain fails:
- The system retries with next eligible captain(s)  
- Exponential backoff is applied to avoid overload  
- Maximum retry attempts are logged, after which manual intervention may occur

---

## 7. What measures prevent misuse?

**Answer:**  
- Rate limiting and throttling of bids  
- Identity verification of captains  
- Anomaly detection for unusual bid patterns  
- Audit logs of all bid actions

---

## 8. How is the customer kept informed?

**Answer:**  
- In-app notifications for bid start, updates, and selection  
- Push notifications via FCM  
- Real-time updates through WebSockets for low latency

---

> Next, we will create **summary.md** to provide a high-level recap of the entire Reverse Bid feature.
