# API Routes

>API untuk kebutuhan mengenai user seperti Login, Signup, dan Logout

## HOME

Redirect to the home if authenticate, if not redirect to login

**URL**

?>`/user/`

**Authentication:**
This route requires Firebase authentication.

**Response**
```json
{
    "id": "string",
    "email": "string",
    "message": "Authorized"
}
```

--

## SIGNUP

Create a new user.

**URL**

?>`/user/signup`

**METHOD**

?>POST

**Body Parameters (JSON):**

- `name`: String, required
- `email`: String, required
- `password`: String, required

**Response**
```json
{
    "id": "string",
    "email": "string",
    "message": "User registered successfully"
}
```

---

## LOGIN

Authenticate a user.

**URL**

?>`/user/login`

**METHOD**

?>POST

**Body Parameters (JSON):**

- `username`: String, required
- `password`: String, required

**Response**
```json
{
    "message": "Login successful",
    "id": "string",
    "email": "string"
}
```
---

## LOGOUT

Logout a user.

**URL**

?>`/user/logout`

**METHOD**

?>GET

**Response**
```json
{
    "message": "Logout successful"
}
```
---
