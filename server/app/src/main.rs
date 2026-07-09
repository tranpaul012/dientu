use app::graphql::{graphql_handler, query_root::QueryRoot};
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
	let schema = Schema::build(QueryRoot::default(), EmptyMutation, EmptySubscription).finish();
	let app = Router::new()
		.route("/", get(graphiql))
		.route("/graphql", post(graphql_handler))
		.layer(Extension(schema));

	let host = env::var("SERVER_HOST").unwrap_or_else(|_| "0.0.0.0".to_string());
	let port = env::var("SERVER_PORT").unwrap_or_else(|_| "5000".to_string());
	let address = format!("{host}:{port}");
	let listener = tokio::net::TcpListener::bind(address).await?;
	println!("GraphiQL: http://localhost:{port}");

	axum::serve(listener, app).await?;
	Ok(())
}
