npm i && npm run-script build
docker rmi -f herbnet-ui:dev
docker image build -t herbnet-ui:dev .
