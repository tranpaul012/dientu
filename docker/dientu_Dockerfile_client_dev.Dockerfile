FROM node:24-bookworm

RUN apt-get update && apt-get install -y \
    git \
    curl \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN corepack enable \
    && corepack install --global yarn@4.10.3
WORKDIR /usr/src/dientu_client

# RUN yarn install

EXPOSE 5000

CMD ["bash"]
