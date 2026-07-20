use std::env::{self};
use std::sync::Once;

use anyhow::anyhow;

static INIT: Once = Once::new();

fn init_env() {
	INIT.call_once(|| {
		dotenvy::from_filename(".env.dev").ok();
	});
}

#[track_caller]
pub fn get_env(key: &str) -> anyhow::Result<String> {
	let location = std::panic::Location::caller();
	init_env();
	env::var(key).map_err(|_| {
		anyhow!(
			"Thiếu biến môi trường: '{}' tại {}:{}",
			key,
			location.file(),
			location.line()
		)
	})
}
