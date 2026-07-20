use sea_orm::{ConnectOptions, Database, DatabaseConnection};
use std::time::Duration;

use crate::get_env;

pub async fn connect() -> anyhow::Result<DatabaseConnection> {
	let database_url = get_env("DATABASE_URL")?;
	println!(" URL PostgreSQL env: {}", database_url);
	let mut options = ConnectOptions::new(database_url);
	options
		.max_connections(10)
		.min_connections(1)
		.connect_timeout(Duration::from_secs(10))
		.idle_timeout(Duration::from_secs(300))
		.sqlx_logging(false);

	let connection = Database::connect(options).await?;
	Ok(connection)
}
