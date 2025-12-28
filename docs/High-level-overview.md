---
title: "High-level-overview"
description: "Complete high-level lifecycle of Reverse Bid — from order creation to ride completion or cancellation"
---

# End-to-End Reverse Bid Flow

This page explains how a **Reverse Bid order flows through the Rapido system** — from the moment a **customer books a ride** until a **captain is assigned, ride completed, or cancelled**.  
It also describes **which services communicate with each other**, **databases involved**, and how **failures are handled**.

---

## 🚀 Real-World Scenario (Rapido Example)

> A user named **Rahul** opens the Rapido app at **8:30 AM (office rush hour)** and books a ride from  
> **Bengaluru Indiranagar → Whitefield**.

Because demand is high, **Reverse Bid is enabled** so captains can quote their preferred price — and Rahul can choose the best one.

We’ll now walk through what happens inside the system 👇

---

## 1. Order Creation & Pricing Evaluation

### 🔹 System Flow

1. Rahul taps **“Book Ride”** in the **Customer App**
2. App sends booking request to **Order Orchestrator**
3. Order Orchestrator calls the **Pricing Engine** to calculate:
   - Base fare (₹160)
   - Reverse Bid eligibility → **Yes**
   - Delay before bids start → e.g., **8 seconds**
4. Order Orchestrator creates the order in **Order Management (OM)**
5. OM stores it in **Orders DB**
6. OM publishes **`order.created`** to **Kafka**

### 🏛 Systems Talking to Each Other
Customer App → Order Orchestrator → Pricing Engine → OM → Orders DB → Kafka

---

### 👥 Real-World Meaning
Rahul has now successfully “requested” a ride.  
The system has decided:

✔ Reverse Bid is allowed  
✔ Captains will soon receive bidding requests  
✔ All details are stored safely in DB  

---

## 2. Dispatcher Initialization & Reverse Bid Enablement

### 🔹 System Flow

1. **Dispatcher Service** listens to Kafka
2. It receives `order.created`
3. Dispatcher creates dispatch records in:
   - **Dispatch DB**
   - **Redis** (fast lookup)
4. Dispatcher activates Reverse Bid via **RB Service**
5. RB Service emits **`reversebid.enabled`**

---

### 👥 Real-World Meaning
The platform is now ready to:

✔ Send Rahul’s ride request to captains  
✔ Allow captains to quote their prices  
✔ Track everything in system records  

---

## 3. Bid Propagation to Captains

### 🔹 System Flow

1. Dispatcher waits for **Reverse Bid start delay**
2. Fetches **Bid Chips** from Pricing Engine — e.g.

| Bid Chip | Value |
|---------|------|
| Chip 1  | ₹150 |
| Chip 2  | ₹160 |
| Chip 3  | ₹170 |

3. Dispatcher identifies eligible captains:
   - Nearby
   - Available
   - Valid documents
4. Bid requests are pushed to their **Captain Apps**
5. Captains respond with prices to **RB Service**

---

### 👥 Real-World Meaning
Nearby captains see:

> “Customer Rahul — Indiranagar to Whitefield  
> Enter your price”

Examples:

- Captain A → ₹155  
- Captain B → ₹160  
- Captain C → ₹150  

These bids are stored and streamed to Rahul’s app.

---

## 4. Customer Interaction & Quote Selection

### 🔹 System Flow

1. Customer App receives live bids
2. Rahul sees:

| Captain | Quote |
|--------|------|
| A | ₹155 |
| B | ₹160 |
| C | ₹150 |

3. Rahul chooses **₹150 (Captain C)**  
4. RB Service emits **`reversebid.quote.accepted`**
5. Dispatcher starts auto-assignment

---

### 👥 Real-World Meaning
Rahul gets the **best deal**  
The system must now **securely assign Captain C** before someone else does.

---

## 5. Auto-Assignment & Retry Handling

### 🔹 Captain Selection Rules

Dispatcher checks:

✔ Captain must have quoted ≤ selected price  
✔ Must be nearby  
✔ Must be free  
✔ Must not be on another ride  

---

### 🔹 Assignment Flow

1. Dispatcher sends assignment request to **Captain C**
2. Captain C may:

| Captain Action | System Response |
|--------------|----------------|
| Accepts | SUCCESS 🎉 |
| Declines | Try next captain |
| No response | Timeout + Retry |

3. If all fail → order may:
   - Retry Reverse Bid
   - OR fallback to normal dispatch

---

### 👥 Real-World Meaning
Suppose:

- Captain C declines  
- Captain A accepts  

Rahul still gets his ₹150 price.

---

## 6. Ride Lifecycle Events

When assignment succeeds:

1. Dispatcher confirms assignment to OM
2. OM emits **`assignment.success`**
3. Captain app sends:

| Stage | Event |
|------|-------|
| Captain reaches pickup | ride.arrived (optional) |
| Ride starts | `ride.started` |
| Ride ends | `ride.completed` |

4. Orders DB is updated

---

### 👥 Real-World Meaning
Rahul:

✔ Sees captain details  
✔ Takes the ride  
✔ Pays at destination  

Ride is complete 🎉

---

## 7. Cancellation & Failure Handling

### 🔹 Possible Real-World Situations

| Case | What Happens |
|------|--------------|
| Rahul cancels | `order.cancelled` |
| No captain bids | fallback to standard pricing |
| Assignments fail | retry nearest captains |
| Bid expired | order continues normal flow |
| Captain cancels mid-way | reassignment logic |

---

### 🔹 Kafka helps ensure
✔ All systems stay in sync  
✔ Audit & tracking are reliable  
✔ Analytics dashboards stay accurate  

---

# 📊 Architecture Flow Diagram (End-to-End)

```mermaid
sequenceDiagram
Customer->>Order Orchestrator: Create Order
Order Orchestrator->>Pricing Engine: Get Base Fare + RB Config
Pricing Engine-->>Order Orchestrator: Fare + Eligibility
Order Orchestrator->>OM: Create Order
OM->>Orders DB: Persist Order
OM->>Kafka: order.created
Kafka->>Dispatcher: Notify Order Created
Dispatcher->>Dispatch DB: Init Dispatch Record
Dispatcher->>RB Service: Enable Reverse Bid
RB Service->>Kafka: reversebid.enabled
Dispatcher->>Captain App: Propagate Bid Chips
Captain App->>RB Service: Submit Quotes
Customer->>RB Service: Accept Quote
RB Service->>Kafka: reversebid.quote.accepted
Dispatcher->>Captain App: Assignment Request
Captain App->>Dispatcher: Accept Assignment
Dispatcher->>OM: Confirm Assignment
OM->>Kafka: assignment.success
Captain App->>OM: Ride Started
OM->>Kafka: ride.started
Captain App->>OM: Ride Completed
OM->>Kafka: ride.completed
