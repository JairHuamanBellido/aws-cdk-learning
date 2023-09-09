import * as cdk from "aws-cdk-lib";
import { aws_s3 as s3 } from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FirstAppCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, "MyFirsBucket", {
      bucketName: "jair-bucket-by-cdk",
      removalPolicy: cdk.RemovalPolicy.DESTROY,

      autoDeleteObjects: true,
    });
  }
}
