FROM rust:1.95 AS builder

RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    pkg-config \
    cmake \
    git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/dientu_server

COPY server/Cargo.toml server/Cargo.lock ./
COPY server/app ./app
COPY server/fix ./fix
COPY server/lib_macro ./lib_macro
COPY server/migration ./migration

RUN cargo build --release -p app

FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/local/bin

COPY --from=builder /usr/src/dientu_server/target/release/app /usr/local/bin/dientu_server

EXPOSE 5000

CMD ["dientu_server"]
