Test GET Request (Retrieve All People):

# Test GET request to retrieve all people
curl -X GET https://hngxpeople-0a5cf31d124b.herokuapp.com/people
Test POST Request (Create a New Person):
# Test POST request to create a new person
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "age": 30}' https://hngxpeople-0a5cf31d124b.herokuapp.com/people
Test PUT Request (Update an Existing Person):
bash
Copy code
# Replace {id} with the actual person ID to update
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name", "age": 35}' https://hngxpeople-0a5cf31d124b.herokuapp.com/people/{id}
Test DELETE Request (Delete an Existing Person):

# Replace {id} with the actual person ID to delete
curl -X DELETE https://hngxpeople-0a5cf31d124b.herokuapp.com/people/{id}
