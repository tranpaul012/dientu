use app::{
	database,
	graphql::{graphql_handler, query_root::QueryRoot},
};
use async_graphql::{http::GraphiQLSource, EmptyMutation, EmptySubscription, Schema};
use axum::{
	extract::Extension,
	response::{Html, IntoResponse},
	routing::{get, post},
	Router,
};
use std::env;

async fn graphiql() -> impl IntoResponse {
	Html(GraphiQLSource::build().endpoint("/graphql").finish())
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
	let database = database::connect().await?;
	println!("Đã kết nối PostgreSQL thành công");

	let schema = Schema::build(QueryRoot::default(), EmptyMutation, EmptySubscription)
		.data(database)
		.finish();
	let app = Router::new()
		.route("/", get(graphiql))
		.route("/graphql", post(graphql_handler))
		.layer(Extension(schema));
	let name_project = env::var("PROJECT_NAME").unwrap_or_else(|_| "not env".to_string());

	let host = env::var("SERVER_HOST").unwrap_or_else(|_| "not env".to_string());
	let port = env::var("SERVER_PORT").unwrap_or_else(|_| "not env".to_string());
	let address = format!("{host}:{port}");
	println!("host: {}", host);
	println!("port: {}", port);
	println!("Project name: {}", name_project);
	let listener = tokio::net::TcpListener::bind(address).await?;
	println!("GraphiQL: http://localhost:{port} {}", env::var("SERVER_ENV").unwrap_or_else(|_| "development".to_string()));
	axum::serve(listener, app).await?;
	Ok(())
}
