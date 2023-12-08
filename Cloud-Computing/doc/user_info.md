# API User

>API untuk kebutuhan mengenai user seperti Login, Signup, dan Logout

## GetUser

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
## Create LOG 

Create Log.

**URL**

?>`/activity/log`

**METHOD**

?>POST

**Response**
```json
{
    "message": "Log Created"
}
```
---
---
## Get All LOG 

Retrieve All LOG.

**URL**

?>`/activity/logs`

**METHOD**

?>GET

**Response**
```json
{
  ["all LOG"]
}
```
---
---
## Get One LOG

Retrieve One LOG.

**URL**

?>`/activity/log/:log_id`

**METHOD**

?>GET

**Response**
```json
{
    "log_id":"log_id","place_id":"place_id","visited_time":"time","text":"text","user_id":"user_id","created_at":"time"
}
```
---
---
## Update LOG

Update Log.

**URL**

?>`/activity/log/:log_id`

**METHOD**

?>PUT

**Response**
```json
{
    "message": "Log Updated"
}
```
---
## Delete LOG

Update Log.

**URL**

?>`/activity/log/:log_id`

**METHOD**

?>DELETE

**Response**
```json
{
    "message": "Log Deleted"
}
```
---


