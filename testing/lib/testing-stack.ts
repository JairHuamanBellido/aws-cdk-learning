import * as cdk from "aws-cdk-lib";
import { aws_s3 as s3 } from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'TestingQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    new s3.Bucket(this, "MyFirsBucket", {
      bucketName: "jair-bucket-by-cdk",
      removalPolicy: cdk.RemovalPolicy.DESTROY,

      autoDeleteObjects: true,
    });

    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler",
      functionName: "lambda-jair-cdk",
    });

    const api = new apigw.LambdaRestApi(this, "Endpoint", {
      handler: hello,
      restApiName: "my-api-gtw-by-jair",
    });
  }
}
