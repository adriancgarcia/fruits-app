# REST
### REspresentational State Transfer

## What is Rest?

REST is an architectural pattern for designing API (Application Programming Interface).

Basically?
- What routes should I make
- What should those routes do

## The Basics

Every application is going be made up of many 

models/resources/entities

- The units of data your application works with.

For example:
- Blogs
- Photos

As an example, tweet:

```json

{
    "text": "STRING",
    "create_at": "TIMESTAMP",
    "updated_at": "TIMESTAMP"
}

```

The details of what properties a model has and their data types, is known as that models SCHEMA.


## RESTFul Routes

The RESTFul routes are a blueprint of the routes and how they should to provide basic CRUD (CREATE, READ, UPDATE, DELETE)

All the routes are built around a path that is named after the model.

```
/tweet
```

|NAME|METHOD|URL|WHAT DOES IT DO|
|----|------|---|---------------|
|INDEX|GET|/tweet|return a list of tweets|
|NEW|GET|/tweet/new|render a page with a form to create a new tweet, submits to CREATE route|
|DESTROY|DELETE|/tweet/:id|delete the specified tweet from the database|
|UPDATE|PUT/PATCH|/tweet/:id| Receive info and update the specified tweet in the database|
|CREATE|POST|/tweet|receive info from NEW form and create new tweet in database |
|EDIT|GET|/tweet/:id/edit| render a page with a form to edit the specified tweet, submits to UPDATE to route|
|SHOW|GET|/tweet/:id|render a page with the specified tweet|

TO REMEMBER... THINK INDUCES

## MVC (Models Views Controllers)

This is application architectural pattern about how to divide up the functionality of your code.

Break up all the code into three buckets:
- Models (Code that related to defining and working with your data)
- Views (Code that describes the user interface)
- Controllers (Code that coordinates data from the models into the views)