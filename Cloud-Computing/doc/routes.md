# API Routes

>API untuk kebutuhan mengenai user seperti Login, Signup, dan Logout

## HOME

Redirect to the home if authenticate, if not redirect to login

**URL**

?>`/api/`

**Authentication:**
This route requires JWT authentication.

**Response**
```json
{
    "message": "Authorized"
}
```

--

## SIGNUP

Create a new user.

**URL**

?>`/api/signup`

**METHOD**

?>POST

**Body Parameters:**

- `name`: String, required
- `email`: String, required
- `password`: String, required

**Response**
```json
{
    "message": "User registered successfully"
}
```

---

## LOGIN

Authenticate a user.

**URL**

?>`/api/login`

**METHOD**

?>POST

**Body Parameters:**

- `username`: String, required
- `password`: String, required

**Response**
```json
{
    "message": "Login successful",
    "token": "string"
}
```
---

## LOGOUT

Logout a user.

**URL**

?>`/api/logout`

**METHOD**

?>GET

**Response**
```json
{
    "message": "Logout successful"
}
```
---
