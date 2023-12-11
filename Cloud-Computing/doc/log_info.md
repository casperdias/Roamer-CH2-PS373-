# API Log Activity

>API untuk CRUD Logbook activity

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