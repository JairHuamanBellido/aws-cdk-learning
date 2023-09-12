import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

import * as lambda from "aws-cdk-lib/aws-lambda";

export class AwsSamStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsSamQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    new lambda.Function(this, "MyFunction", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "app.lambdaHandler",
      functionName: "my-sam-lambda-by-cdk",
      code: lambda.Code.fromAsset("lambda/hello-world"),
    });
  }
}
