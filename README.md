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

# HOW TO USE MY ENDPOINTS
- Click on : ``https://hngx-people.onrender.com/`` you will get a welcome message:
 ``Welcome to my HNGx API!``
- To Get all persons in our Database use this: 
	- ``https://hngx-people.onrender.com/api/people``
	<details>
	<summary>Click to set the output/hide file contents</summary>
	[
  {
    "_id": "650367995208039d682dcc90",
    "name": "Onur"
  },
  {
    "_id": "650367a55208039d682dcc92",
    "name": "Aisha"
  },
  {
    "_id": "65036c3c3c5dcce630ed56c7",
    "name": "Khalfan muslim"
  },
  {
    "_id": "650370285a409c4874075030",
    "name": "Habib Elhajj"
  },
  {
    "_id": "65037f71db8f5891a1ab5382",
    "name": "Abbas Muslim"
  },
  {
    "_id": "6503836ee0c6614a9b979372",
    "name": "Abbasanjo"
  },
  {
    "_id": "65038376e0c6614a9b979374",
    "name": "AHJKO"
  },
  {
    "_id": "6504736b894529e3db0d1b2d",
    "name": "Atesh Achar"
  },
  {
    "_id": "6504737b894529e3db0d1b2f",
    "name": "KHALFANITO"
  },
  {
    "_id": "650473fd894529e3db0d1b32",
    "name": "MAGHANDY"
  },
  {
    "_id": "6504740a894529e3db0d1b34",
    "name": "MAGHANDY"
  },
  {
    "_id": "65047413894529e3db0d1b36",
    "name": "MAGHANDY2"
  }
]
	</details>
- To GET a person by user_id:
	- ``https://hngx-people.onrender.com/api/person/:user_id``
	- For example:``https://hngx-people.onrender.com/api/person/650367995208039d682dcc90``
	```json{"_id":"650367995208039d682dcc90","name":"Onur"}``
- To Update(PUT) a person details:
![img]()

- To delete a person using their user_id: 
	- ``https://hngx-people.onrender.com/api/person/:user_id``
![img]()
</details>

# STAGE 3 TASK
<details>
<summary>Click to READ MORE/hide file contents</summary>
</details>

# STAGE 4 TASK
<details>
<summary>Click to READ MORE/hide file contents</summary>
</details>
