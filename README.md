# Restful Api

CRUD application RESTful API created with NodeJs and MongoDb.
> **DISCLAIMER:**</span> *This application was built for educational/practice purposes only, although it's open to any contribution. Please discuss the feature you wish to include via issue before make any change.*


## Installation

1. Clone repository with
```bash
git clone https://github.com/GabrielDonas/restful-api.git
```
2. On the root project, run 
```bash
npm install
```
3. Connect the application to your cluster using MongoDB's native drives 
```bash 
DBCONNECTION=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
```

*Include the above as an environment variable replacing the relevant information.Ensure any option params are [URL encoded](https://docs.atlas.mongodb.com/troubleshoot-connection/#special-characters-in-connection-string-password). More about [How to Connect to MongoDB Atlas](https://studio3t.com/knowledge-base/articles/connect-to-mongodb-atlas).*

4. Still on the root project, run the app with 
```bash
npm start
``` 
5. The app would be served in `http://localhost:3000/`

## Usage

To test the API, I recommend using the Visual Studio Code extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

The file route.rest will provide a list of HTTP requests to access all the endpoints.

**Routes:**
1. GET `/api/posts`: get all posts
2. GET `/api/posts/:id`: get post by id
3. PATCH `/api/posts/:id`: update post by id
4. DELETE `/api/posts/:id`: delete post by id
