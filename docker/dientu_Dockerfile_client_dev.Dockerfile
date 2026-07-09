FROM node:24-bookworm

RUN apt-get update && apt-get install -y \
    git \
    curl \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN corepack enable

WORKDIR /usr/src/dientu_client

EXPOSE 5000

CMD ["bash"]
