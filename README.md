# Install

1. Install [docker](https://www.docker.com/community-edition#/download)
2. Install [docker-compose](https://docs.docker.com/compose/install/)
3. Clone the project: `git clone git@github.com:leonardodeabreu/nodejs-api.git`

### Make happenning
1. Go to `.docker` folder and execute the follow command: ``docker-compose up --build -d``
2.  Open your REST API faker tool(like postman, insomnia..) and go to: http://localhost:8080/api/skills
3. We have four endpoints here.
	- METHOD `GET` in / uri.
		- Should return all skills on "database".
	- METHOD `GET` passing `id` in /:id uri.
		- Should return skill by id with all information.
	- METHOD `POST` in / uri.
		- Should pass `name` and `level` in body as json.
	- METHOD `PUT` passing `id` in /:id uri.
		- Should pass `level` in body as json.