---
title: "Notifications"
description: "In-app and push notifications for Reverse Bid"
---

# Notifications in Reverse Bid

This document explains **how notifications are delivered to customers and captains**, covering in-app updates, push notifications, and real-time events.

---

## 1. Customer Notifications

Customers are notified throughout the Reverse Bid lifecycle:

- **Bid Start:** Notifies the customer that their order is now in Reverse Bid mode.
- **Bid Updates:** Shows lowest bid, new bids, or changes in estimated delivery time.
- **Bid End / Selection:** Confirms which bid was selected and which captain is assigned.
- **Order Cancellation:** Alerts customer if order is canceled by them or system fallback.

**Scenario Example:**  
- Customer places order → receives “Reverse Bid started” notification → sees bids ₹120, ₹130 → bid expires → receives “Bid ₹130 selected” notification.

---

## 2. Captain Notifications

Captains are kept informed of bid opportunities and assignment status:

- **New Reverse Bid Available:** Real-time notification with order details.
- **Bid Acceptance / Rejection:** Updates on whether customer chose their bid.
- **Auto-Assignment:** Notification when captain is assigned an order automatically.
- **Retry Attempts:** Alerts if assignment fails and system retries.

**Scenario Example:**  
- Captain A receives bid → accepts ₹130 → customer chooses Captain B → Captain A receives “Bid not selected” notification.

---

## 3. Technical Details

- **Push Notifications:** Delivered via Firebase Cloud Messaging (FCM) for mobile apps.
- **In-App Updates:** Real-time bid updates via **WebSockets / Streaming API**.
- **Low Latency:** Critical for timely bid updates, especially for short expiry timers (e.g., 10 seconds).

---

## 4. Best Practices

- Keep notifications concise and actionable.
- Include bid expiry timers and estimated delivery info.
- Track delivery and read receipts for analytics and monitoring.

---

> Next, we will cover **Operations: Retry Logic** (`retry-logic.md`) to explain how the system handles failed captain assignments and retries.
