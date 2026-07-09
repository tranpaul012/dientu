use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[derive(DeriveIden)]
enum Users {
    Table,
    Id,
    Email,
    Name,
    PasswordHash,
    CreatedAt,
    UpdatedAt,
}

#[async_trait::async_trait]
impl MigrationTrait for Migration {
  async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
    manager
      .create_table(
        Table::create()
          .table(Users::Table)
          .if_not_exists()
          .col(pk_uuid(Users::Id))
          .col(string_uniq(Users::Email))
          .col(string(Users::Name))
          .col(string(Users::PasswordHash))
          .col(date_time(Users::CreatedAt).default(Expr::current_timestamp()),)
          .col(date_time(Users::UpdatedAt).default(Expr::current_timestamp()),)
          .to_owned(),
      )
        .await
    }

  async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
    manager
      .drop_table(Table::drop().table(Users::Table).to_owned()).await
    }
}