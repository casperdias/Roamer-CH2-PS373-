# API Routes

## GET /users

Get all users.

**Authentication:**
This route requires JWT authentication.

---

## POST /signup

Create a new user.

**Body Parameters:**

- `username`: String, required
- `password`: String, required

---

## POST /login

Authenticate a user.

**Body Parameters:**

- `username`: String, required
- `password`: String, required

---

## GET /

Redirect to the app if installed, otherwise redirect to the Play Store.
