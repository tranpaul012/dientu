use app::{
	get_env,
	graphql::{graphql_handler, query_root::QueryRoot},
};
use async_graphql::{http::GraphiQLSource, EmptyMutation, EmptySubscription, Schema};
use axum::{
	extract::Extension,
	response::{Html, IntoResponse},
	routing::{get, post},
	Router,
};

async fn graphiql() -> impl IntoResponse {
	Html(GraphiQLSource::build().endpoint("/graphql").finish())
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
	// let database = database::connect().await?;
	// println!("Đã kết nối PostgreSQL thành công");

	// let schema = Schema::build(QueryRoot::default(), EmptyMutation, EmptySubscription)
	// 	.data(database)
	// 	.finish();
	// let app = Router::new()
	// 	.route("/", get(graphiql))
	// 	.route("/graphql", post(graphql_handler))
	// 	.layer(Extension(schema));
	// let name_project = env::var("PROJECT_NAME");

	let port = get_env("SERVER_PORT1");
	println!("port : {:?}", port);

	// let listener = tokio::net::TcpListener::bind(address).await?;
	// println!("GraphiQL: http://localhost:{port} {}", env::var("SERVER_ENV").unwrap_or_else(|_| "development".to_string()));
	// axum::serve(listener, app).await?;
	println!("kết thúc ở đây");
	Ok(())
}
