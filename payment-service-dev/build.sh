git checkout go.mod
git checkout go.sum
git pull
go mod tidy
aws ecr get-login-password --region ap-southeast-1 --profile tixlabs | docker login --username AWS --password-stdin 871400347589.dkr.ecr.ap-southeast-1.amazonaws.com