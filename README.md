This is a Blog site where user can create blog, post, comment & like. ReactJS is used in front-end and Django is in back-end.
# Tools
### Back-end
#### Language:
	Python (3.10.5)

#### Frameworks:
	Django(4.0.4)
	django rest framework (3.13.1 )
	
#### Other libraries / tools:
	asgiref==3.5.0
	certifi==2021.10.8
	cffi==1.15.0
	charset-normalizer==2.0.12
	coreapi==2.3.3
	coreschema==0.0.4
	cryptography==36.0.2
	defusedxml==0.7.1
	django-cors-headers==3.11.0
	django-templated-mail==1.1.1
	djangorestframework-simplejwt==5.1.0
	djoser==2.1.0
	idna==3.3
	itypes==1.2.0
	Jinja2==3.1.1
	MarkupSafe==2.1.1
	oauthlib==3.2.0
	psycopg2==2.9.3
	pycparser==2.21
	PyJWT==2.3.0
	python3-openid==3.2.0
	pytz==2022.1
	requests==2.27.1
	requests-oauthlib==1.3.1
	six==1.16.0
	social-auth-app-django==4.0.0
	social-auth-core==4.2.0
	sqlparse==0.4.2
	uritemplate==4.1.1
	urllib3==1.26.9

### Front-end
#### Language:
	node (16.15.1)
	npm (8.11.0 )

####  Frameworks:
	React (^18.0.0)
	react-redux (^7.2.8)
### Database:
	PostgreSQL (14.3)

# Setup
The first thing to do is to clone the repository:
```sh
$ git clone https://github.com/MahmudJewel/BlogWithLikeComment-DRF_Reactjs
```
### Back-end
Create a virtual environment to install dependencies in and activate it:
```sh
$ cd backend
$ python -m venv venv
$ source venv/bin/activate
```
Then install the dependencies:
```sh
(venv)$ pip install -r requirements.txt
```
Note the `(venv)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment set up by `virtualenv2`.

Once `pip` has finished downloading the dependencies:
```sh
(venv)$ python manage.py migrate
(venv)$ python manage.py runserver 8000
```

### Front-end
```sh
$ cd frontend
$ npm install
$ npm start
```

# Project Description:
This is a full functioned blog site using Django & Reactjs as a full-stack.

# Screenshot
### initial page
![Category List](https://github.com/MahmudJewel/Simple-calculator/blob/development/screenshot/cal-1.jpg)

### Addition mode
![Category List](https://github.com/MahmudJewel/Simple-calculator/blob/development/screenshot/cal-2.jpg)

### Division mode
![Category List](https://github.com/MahmudJewel/Simple-calculator/blob/development/screenshot/cal-3.jpg)
