#!/bin/bash

# 请在此处设置您的实际值
LOCAL_PROJECT_PATH="build"
REMOTE_USER="ubuntu"
REMOTE_HOST="106.53.64.77"
REMOTE_PATH="/home/${REMOTE_USER}/docusaurus_project"
CONTAINER_NAME="focused_panini"
CONTAINER_DEST_PATH="/app"

# 使用 scp 将本地 Docusaurus 项目复制到远程服务器
scp -r ${LOCAL_PROJECT_PATH} ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}

# 在远程服务器上，将文件从服务器文件系统复制到 Docker 容器中
ssh ${REMOTE_USER}@${REMOTE_HOST} "docker cp ${REMOTE_PATH} ${CONTAINER_NAME}:${CONTAINER_DEST_PATH}"

# 在远程服务器上，启动容器（如果尚未启动）
ssh ${REMOTE_USER}@${REMOTE_HOST} "docker start ${CONTAINER_NAME}"

# 在远程服务器上，进入容器并运行 Docusaurus 项目构建命令
ssh ${REMOTE_USER}@${REMOTE_HOST} "docker exec ${CONTAINER_NAME} /bin/bash -c 'cd ${CONTAINER_DEST_PATH} && npm init && npm install && npm run build && npm install -g serve'"

# 在远程服务器上，重新启动容器以运行 Docusaurus 项目
ssh ${REMOTE_USER}@${REMOTE_HOST} "docker restart ${CONTAINER_NAME}"

