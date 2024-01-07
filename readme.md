# Local Plans 
Experimenting with applying AI to Local Plans produced by planning authorities in England.  

## Configure
Run: `pip install requirements.txt`
Copy .env_example to .env 
Populate .env with your own API keys 


## Geting the data 
Look at data https://github.com/jimmytidey/localplans-analysis to populate the vector store  

## Front end 
Run the vite dev server: in vite/ and run: npm run dev
Build react app (builds to app/ folder): `npm run build --emptyOutDir` 

## Run the server locally  
`flask --app app --debug run`

## Deploy to heroku 
`docker image build --platform linux/amd64 -t localplans-server-v2-x86 . `
`docker tag  localplans-server-v2-x86 registry.heroku.com/[your heroku app name]/web`
`docker push  registry.heroku.com/[your app name]/web `
`heroku container:login`
`heroku container:release web --app [your app name]`