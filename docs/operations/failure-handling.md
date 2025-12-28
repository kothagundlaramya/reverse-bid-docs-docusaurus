---
title: "Failure Handling"
description: "How Reverse Bid handles failed assignments and cancellations"
---

# Failure Handling in Reverse Bid

This document explains **how the system manages failures**, including assignment errors, customer cancellations, and retries.

---

## 1. Common Failure Scenarios

- **No captain accepts the bid** within the bid window.
- **Network or system error** occurs during assignment.
- **Customer cancels** order mid-bidding.
- **Captain cancels** post-assignment.

**Scenario Example:**  
- Customer opts-in → bids sent → no captain responds → system triggers retry logic.

---

## 2. Resolution Strategies

1. **Retry Logic**  
   - Failed assignments automatically retried with next eligible captain(s).  
   - Exponential backoff applied to avoid overload.

2. **Customer Notification**  
   - Customer informed if no bid could be fulfilled.  
   - Optionally given option to extend bid window or fallback to standard dispatch.

3. **Manual Intervention**  
   - If retries fail, operations team can manually assign order.  
   - All failures logged for audit and performance tracking.

4. **Bid Termination**  
   - Expired, rejected, or canceled bids marked as `terminated`.  
   - System ensures no stale bids remain active.

---

## 3. Metrics and Monitoring

- Track **failure rates** per order type, region, and time of day.  
- Monitor **retry success/failure** to optimize assignment logic.  
- Detect patterns of **frequent captain cancellations** or network issues.

**Example Metrics:**  
- 98% of assignments succeed after 2 retries  
- Average retry duration = 3.2s  
- Cancellation rate < 2% per day

---

## 4. Integration with Reverse Bid Flow

- Failure handling is tightly integrated with:
  - **Retry Logic** → automated reassignment  
  - **Notifications** → customer and captain updates  
  - **Timeouts and States** → state transitions reflect failures

**Scenario Example:**  
- Bid expires → retry attempts → no captain available → customer notified → manual dispatch triggered.

---

> Next, we will move to **Edge Cases**, starting with **Cancelled Orders** (`cancelled-orders.md`) to describe customer and captain cancellation scenarios.
