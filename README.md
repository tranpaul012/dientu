# Dientu

## Docker

Chạy trực tiếp bằng Docker Compose (không cần Makefile):

```bash
docker compose --env-file docker/.env.dev -f docker/dientu_compose_dev.yaml up --build
```

Server sẽ khởi động dưới dạng container chờ và không tự chạy ứng dụng. Để chạy server thủ công:

```bash
docker compose exec server cargo run
```

Nếu muốn dùng lệnh khởi động trực tiếp trong thư mục `docker`:

```bash
docker compose --env-file .env.dev -f dientu_compose_dev.yaml up --build
```

Nếu đang đứng ở root project:

```bash
docker compose --env-file docker/.env.dev -f docker/dientu_compose_dev.yaml up --build
```

Env chính nằm ở `docker/.env.dev`, ví dụ:

- `POSTGRES_HOST_PORT`, `POSTGRES_CONTAINER_PORT`
- `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`
- `POSTGRES_DATA_VOLUME`
- `SERVER_HOST_PORT`, `SERVER_CONTAINER_PORT`
- `CLIENT_HOST_PORT`, `CLIENT_CONTAINER_PORT`

## Docker PROD

Đổi  mật khẩu trong `docker/.env.prod` trước khi chạy production.

```bash
docker compose --env-file docker/.env.prod -f docker/dientu_compose_prod.yaml up --build -d
```

## CI/CD

CI chạy qua GitHub Actions tại `.github/workflows/ci.yml`:

- validate Docker Compose dev/prod
- kiểm tra Rust server
- lint/build Next.js client

CD mẫu nằm tại `.github/workflows/deploy-vps.yml`, chạy thủ công bằng `workflow_dispatch`.

Cần cấu hình GitHub repository secrets:

- `DEPLOY_HOST`
- `DEPLOY_USER`
- `DEPLOY_SSH_KEY`
- `DEPLOY_PATH`
