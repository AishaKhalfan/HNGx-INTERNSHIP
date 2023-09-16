# HNGx-INTERNSHIP
Projects I worked on during my  HNGx virtual internship

## How to use on Local Machine
- ``git clone https://github.com/AishaKhalfan/HNGx-INTERNSHIP.git``
- ``cd HNGx-INTERNSHIP``
- Run this: ``npm install`` to install the dependencies
- Then ``npm start`` to start the server
	- You will get this:
	```
	
	> hngxapi@1.0.0 start
	> node app.js
	App is listening on http://localhost:3000/
	Connected to database
	```
- Click on ``http://localhost:3000/`` to start interacting with my Endpoints

# STAGE 1 TASK
<details>
<summary>Click to READ MORE/hide file contents</summary>
	- This is an ExpressJS endpoints

 Deployed it to heroku: https://hngxapi-b17a89a82aa5.herokuapp.com/api?slack_name=AishaKhalifan&track=Backend

   **How I deployed it Heroku**
   	- ``heroku login``
   	- ``heroku create your-app-name(hngxapi) --buildpack heroku/nodejs``
   	- ``git push heroku main``
   **How to run my endpoint**
	- In your terminal run ``heroku open``
	- It will connect you to: https://hngxapi-b17a89a82aa5.herokuapp.com/api
   	- or:  ``https://hngx-people.onrender.com/api/``
   	- ?slack_name=AishaKhalifan&track=Backend or any values 
</details>

# STAGE 2 TASK 
<details>
<summary>Click to READ MORE/hide file contents</summary>
**In this Task I updated my hosting to render because I had a problem accessing my MongoDB atlas on Heroku**

## ABOUT THIS
- A simple REST API capable of CRUD operations on a "person" resource, interfacing with Mongodb hosted on MongoAtlas
- My API can dynamically handle parameters, such as adding or retrieving a person by ``name`` or by ``_id``

## HOSTING
- We deployed this API on render: https://hngx-people.onrender.com/api/
## REST API ENDPOINTS
- The follwoing are my endpoints:
	- CREATE: Adding a new person.  /api
	- READ: Fetching details of a person.  => /api/user_id
	- UPDATE: Modifying details of an existing person => /api/user_id
	- DELETE: Removing a person => /api/user_id
- This API interacts with A MONGODB database hosted on mongoAtlas
- I connected the API to the mongodb atlas then added my mongodb uri adn connection string to my RENDER environment variables

# HOW TO USE MY ENDPOINTS
- Click on : ``https://hngx-people.onrender.com/`` you will get a welcome message:
 ``Welcome to my HNGx API!``
- To Get all persons in our Database use this: 

	- ``https://hngx-people.onrender.com/api/people``
- ![IMG](https://github.com/AishaKhalfan/HNGx-INTERNSHIP/blob/main/images/get_all2.png)
<details>
<summary>Click to set the output/hide file contents</summary>
```json
[
  {
    "_id": 1,
    "name": "AISHA KHALFAN"
  },
  {
    "_id": 2,
    "name": "KHALFAN"
  },
  {
    "_id": 3,
    "name": "KHALFAN MUSLIM"
  },
  {
    "_id": 4,
    "name": "MUSLIM"
  },
  {
    "_id": 5,
    "name": "ATESH"
  },
  {
    "_id": 6,
    "name": "ATESH ACHAR"
  },
  {
    "_id": 7,
    "name": "ONUR"
  },
  {
    "_id": 8,
    "name": "OSMAN"
  },
  {
    "_id": 9,
    "name": "HAJJ HABIB"
  },
  {
    "_id": 10,
    "name": "AMAL"
  },
  {
    "_id": 11,
    "name": "AHMED"
  },
  {
    "_id": 12,
    "name": "BARKE"
  },
  {
    "_id": 13,
    "name": "BAHJA"
  },
  {
    "_id": 14,
    "name": "BASSAM"
  },
  {
    "_id": 15,
    "name": "CHALTU"
  },
  {
    "_id": 16,
    "name": "CHAMISA"
  },
  {
    "_id": 17,
    "name": "CHANYISA"
  },
  {
    "_id": 18,
    "name": "DAUD"
  },
  {
    "_id": 19,
    "name": "DANIELA"
  },
  {
    "_id": 20,
    "name": "DAWOOD"
  },
  {
    "_id": 21,
    "name": "HALIME SULTAN"
  },
  {
    "_id": 22,
    "name": "NAJMA ELMI"
  },
  {
    "_id": 23,
    "name": "MULKI BOXXY"
  },
  {
    "_id": 24,
    "name": "DEKA ISTVAR"
  },
  {
    "_id": 25,
    "name": "VISHV KHVLFVN"
  }
]
```
</details>

- ![IMG](https://github.com/AishaKhalfan/HNGx-INTERNSHIP/blob/main/images/get_all.png)
- To GET a person by user_id:
	- ``https://hngx-people.onrender.com/api/person/:user_id``
	- For example:``https://hngx-people.onrender.com/api/person/25``
	```json{"_id":"25","name":"VISHV KHVLFVN"}```

- To Update(PUT) a person details:
![img](https://github.com/AishaKhalfan/HNGx-INTERNSHIP/blob/main/images/update_person.png)

- To delete a person using their user_id: 
	- ``https://hngx-people.onrender.com/api/person/:user_id``
![img](https://github.com/AishaKhalfan/HNGx-INTERNSHIP/blob/main/images/delete.png)

</details>

# STAGE 3 TASK
<details>
<summary>Click to READ MORE/hide file contents</summary>
</details>

# STAGE 4 TASK
<details>
<summary>Click to READ MORE/hide file contents</summary>
</details>
