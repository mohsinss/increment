#!/bin/bash

# Script for quick redeployment of the application to firebase

export PATH="`npm config get prefix`/bin:$PATH"
cd client
npm run build
firebase deploy
