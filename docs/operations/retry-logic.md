---
title: "Retry Logic"
description: "How failed captain assignments are retried in Reverse Bid"
---

# Retry Logic in Reverse Bid

This document explains **how the system ensures orders are reliably assigned to captains**, handling temporary failures with automated retries.

---

## 1. Purpose of Retry Logic

- Ensure **successful assignment** even when temporary issues occur.
- Handle failures due to:
  - Network errors
  - Captain unavailability
  - System latency or exceptions

**Scenario Example:**  
- Dispatcher tries to assign order to Captain A → fails due to network timeout → system triggers retry to Captain B.

---

## 2. Retry Mechanism

1. **Initial Assignment Attempt**  
   - System attempts to assign the order to eligible captain(s) based on:
     - Proximity
     - Rating
     - Availability
2. **Retry Attempts**  
   - If assignment fails, system retries up to **N times** with **exponential backoff**.
   - Retry targets next eligible captain(s) in queue.
3. **Fallback Handling**  
   - After maximum retries, order may be routed to:
     - Manual dispatch team
     - Extended Reverse Bid (if allowed)
   - System logs failure for monitoring and analytics.

**Example:**  
- Max retries = 3  
- Attempt 1 → Captain A unavailable  
- Attempt 2 → Captain B busy  
- Attempt 3 → Captain C accepts → order assigned successfully

---

## 3. Monitoring and Logging

- All retry attempts are logged with:
  - Timestamps
  - Target captain
  - Failure reason
- Metrics tracked:
  - Success rate per retry
  - Average retry duration
  - Failure patterns

**Benefits:**  
- Improves reliability of automated dispatch  
- Provides data for improving captain selection logic

---

## 4. Integration with Reverse Bid Flow

- Retry logic integrates with:
  - **Bid lifecycle** → ensures customer sees updated status if original bid fails
  - **Notifications** → captains and customers informed about retries
  - **Failure handling** → triggers escalation if retries fail

---

> Next, we will cover **Timeouts and States** (`timeouts-and-states.md`) to explain the lifecycle of a Reverse Bid and state transitions.
