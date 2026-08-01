.PHONY: dev build run check fmt clippy test clean

dev:
	cargo watch -c -w app/src -x "run -p app"

build:
	cargo build --release -p app

run:
	cargo run -p app

check:
	cargo check

fmt:
	cargo fmt

clippy:
	cargo clippy

test:
	cargo test

clean:
	cargo clean
