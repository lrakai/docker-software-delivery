#!/bin/bash

host=localhost
port=80

messages_response=`curl $host:$port/api`
if [[ $messages_response -ne "[]" ]]; then
    >&2 echo Unexpected inital messages response
    exit 1
fi

post_response=`curl -XPOST -H "Content-Type: application/json" -d '{"message":"test"}' $host:$port/api`
if [[ $post_response != *"test"* || $post_response != *"_id"* ]]; then
    >&2 echo Unexpected response to adding a message
    exit 1
fi

messages_response=`curl $host:$port/api`
if [[ $messages_response != *"test"* ]]; then
    >&2 echo Unexpected messages response after adding a message
    exit 1
fi

echo SUCCESS - passed all tests
exit 0