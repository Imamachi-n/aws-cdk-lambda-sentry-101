#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkLambdaSentry101Stack } from '../lib/aws-cdk-lambda-sentry-101-stack';

const app = new cdk.App();
new AwsCdkLambdaSentry101Stack(app, 'AwsCdkLambdaSentry101Stack');
