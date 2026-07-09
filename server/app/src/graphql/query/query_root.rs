use async_graphql::Object;

#[derive(Default)]
pub struct QueryRoot;

#[Object]
impl QueryRoot {
	async fn hello(&self) -> &str {
		"this is test query root"
	}
}
