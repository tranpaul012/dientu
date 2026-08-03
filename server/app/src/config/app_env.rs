use std::env::{self};
use std::sync::Once;

// use anyhow::anyhow;

static INIT: Once = Once::new();

fn init_env() {
	INIT.call_once(|| {
		dotenvy::from_filename(".env.dev").ok();
	});
}

#[track_caller]
pub fn get_env(key: &str) -> String {
	let env = env::var(key);
	match env {
		Ok(value) => value,
		Err(_) => {
			init_env();
			env::var(key).unwrap_or_else(|_| panic!("không xác định env này :{}", key))
		}
	}
}
