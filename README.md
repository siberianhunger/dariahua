# SPA for my sister Daria :)
https://dariahua.ru/
## run with docker

1. 
`docker build -t dariahua .`

2.
`docker compose up -d static_site`

## local run
Assuming you already have some python 3.10+ on your computer (if not, just install it)

1. Install, create & activate python virtual environment (if you don't care - you can install all dependencies just as it is)
`
sudo apt-get install python3-venv && python3 -m venv venv && source venv/bin/activate
`

2. Install dependencies
`
pip install -r requirements.txt
`

3. Run FastAPI application
`
uvicorn main:app --host 0.0.0.0 --port 8080 --reload
`
