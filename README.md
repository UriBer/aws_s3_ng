# AwsS3Ng
Will show how to consume and display data from api endpoints created in aws.
The first will be a mock service from outside aws - it will display bitcoin exchange rate.
The second one will be with elastic beanstalk using python.
The third one will be through api gateway.

This demo is based on the following web resources:
[Angular guide](https://angular.io/guide/http).

[Angular data retreival from server methods](https://www.techiediaries.com/angular-by-example-httpclient-get/).

[Amazon S3 static site hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html#step1-create-bucket-config-as-website).

good luck!

--- assignments ---

1. Create a new service in elastic beanstalk and display its data in the page.
2. Create a new api gateway service with mock data and display it in the page.
3. Create a new api gateway service with data from dynambodb and display it in the page.
4. Create a new api gateway service with data from s3 files and display it in the page.

--- end of assignments ---


--- the angular regular stuff... ---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Upload to S3
use [amazons3 step by step on bucket website hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html#step1-create-bucket-config-as-website). 
remember to remove public restrictions and set bucket policy as the following example
 {
   "Version":"2012-10-17",
   "Statement":[{
 	"Sid":"PublicReadForGetBucketObjects",
         "Effect":"Allow",
 	  "Principal": "*",
       "Action":["s3:GetObject"],
       "Resource":["arn:aws:s3:::example-bucket/*"
       ]
     }
   ]
 }


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
