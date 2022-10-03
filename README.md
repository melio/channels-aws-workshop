# channels-aws-workshop
Welcome to Channels AWS workshop!

## The purpose of the workshop
- Learn AWS basics through practice
- Have fun!

## The Task
Build a simple JSON editor

## How
This repo contains a simple JSON editor client app. You're mission, should You choose to accept it, is to build its backend

## Prerequisits
- AWS SAM CLI - https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-mac.html
- AWS CLI - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

## Features List
- Ability to View existing JSON file
- Ability to Save edited JSON file
- Send notification that file has been edited

## Taks List
- Deploy the client app to an S3 bucket and serve it from there
- Create a lambda, that would be used by the client to write the JSON file to an S3 bucket
- Create a lambda that reads the JSON file and send it to the client for editing
- Create a lambda that will receive a notification through an event, whenever JSON file is changed (OPTIONALLY: Send an email notification)

## Suggested Architecture
This is just a suggestion - make it your own! :)
<img width="1082" alt="image" src="https://user-images.githubusercontent.com/1139234/193637757-801bce45-b831-4a6f-9424-f5fdd38e8b57.png">

## Useful Resources 

- Tutorial on serving sites from S3: https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html
- Totorial on setting up credentials to use the aws and sam CLI - https://docs.amazonaws.cn/en_us/serverless-application-model/latest/developerguide/serverless-getting-started-set-up-credentials.html
- Totorial on writting and deploying Lambdas in Typescript: https://docs.aws.amazon.com/lambda/latest/dg/typescript-package.html
