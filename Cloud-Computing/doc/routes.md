# API Routes untuk user auth

This document describes the API routes used in the project.

# LINK
domain/api/

## `GET /`
This route checks if the user is authenticated.

**Input**
None

**Response**
If the user is authenticated:

```json
{
    "message": "Authorized"
}
```

If the user is not authenticated:

```json
{
    "message": "Unauthorized"
}
```

## `POST /signup`
This route registers a new user.

**Input**
```json
{
    "name": "string",
    "email": "string",
    "password": "string"
}
```

**Response**
If the registration is successful:

```json
{
    "message": "User registered successfully"
}
```

## `POST /login`
This route logs in a user.

### Input
```json
{
    "email": "string",
    "password": "string"
}
```

### Respone
If the login is successful:

```json
{
    "message": "Login successful",
    "token": "string"
}
```

## `GET /logout`
This route logs out a user.

### Input
None

### Response
```json
{
    "message": "Logout successful"
}
```
