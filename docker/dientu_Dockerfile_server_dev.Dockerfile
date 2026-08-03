FROM rust:1.95

RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    pkg-config \
    cmake \
    git \
    && rustup component add rustfmt \
    && rm -rf /var/lib/apt/lists/*

RUN cargo install cargo-watch

WORKDIR /usr/src/dientu_server

EXPOSE 3000
