#!/bin/bash

echo "==[ BUILDING NEXTJS ]==" && \
npm run build && \
echo "==[ STARTING NEXTJS ]==" && \
npm run start

exec "$@"
