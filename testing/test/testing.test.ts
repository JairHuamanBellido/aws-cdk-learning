import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as Testing from "../lib/testing-stack";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/testing-stack.ts
test("S3 Bucket Created", () => {
  const app = new cdk.App();
  //     // WHEN
  const stack = new Testing.TestingStack(app, "MyTestStack");
  //     // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::S3::Bucket", {
    BucketName: "jair-bucket-by-cdk",
  });
});

test("Lambda function Created", () => {
  const app = new cdk.App();

  const stack = new Testing.TestingStack(app, "MyTestStack");

  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::Lambda::Function", {
    FunctionName: "lambda-jair-cdk",
  });
});

test("API Gateway Created", () => {
  const app = new cdk.App();
  const stack = new Testing.TestingStack(app, "MyTestStack");

  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::ApiGateway::RestApi", {
    Name: "my-api-gtw-by-jair",
  });
});
