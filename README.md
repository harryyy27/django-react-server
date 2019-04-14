# django-react-server

Python backend, react front end server. Django loads react through the lead app connecting the front and backend via djangorestframework REST API. Basic model used. Load up as follows

1. git clone the repo
2. npm i - install js packages
3. pipenv install - install python packages
4. pipenv shell - activate virtual environment
5. npm run dev - uses webpack to bundle react into static folder as main.js
6. cd into leadmanager
7. python manage.py syncdb - initialise db
8. python manage.py migrate - update migrate schema into db
9. python manage.py runserver - loads server on localhost:8000
