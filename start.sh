#!/bin/bash
(cd backend && nodemon start) & (cd ../frontend && npm start)