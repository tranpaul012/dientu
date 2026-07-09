use async_graphql::{EmptyMutation, EmptySubscription, Schema};
use async_graphql_axum::{GraphQLRequest, GraphQLResponse};
use axum::extract::Extension;

use crate::graphql::query_root::QueryRoot;
pub async fn graphql_handler(
	Extension(schema): Extension<Schema<QueryRoot, EmptyMutation, EmptySubscription>>,
	req: GraphQLRequest,
) -> GraphQLResponse {
	schema.execute(req.into_inner()).await.into()
}
