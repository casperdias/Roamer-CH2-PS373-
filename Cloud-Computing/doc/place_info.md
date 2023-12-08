# API Places

> API untuk kebutuhan Mengambil Semua lokasi atau lokasi spesifik

## Get All Places

Get all places with return JSON Array Document

**URL**

?>`/places/`

**METHOD**

?>GET

**Response**
```json
[
  {
    "id": int,
    "name": String,
    "city": String,
    "description": String,
    "price_range": String,
    "rating": float,
    "img_link": String
  },
  {
    "id": int,
    "name": String,
    "city": String,
    "description": String,
    "price_range": String,
    "rating": float,
    "img_link": String
  },
  {
    .......
  }
]
```
---

## Get Places with Specific ID

Get place with return JSON Array Document

**URL**

?>`/places/:id`

**METHOD**

?>GET

**Response**
```json
{
    "id": int,
    "name": String,
    "city": String,
    "description": String,
    "price_range": String,
    "rating": float,
    "img_link": String
}
```
---
