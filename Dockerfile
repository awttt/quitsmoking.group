# 使用 Node.js 14 作为基础镜像
FROM node:14

# 拷贝应用程序代码到容器中
COPY . /app

# 切换到应用程序目录
WORKDIR /app

# 安装依赖项
RUN npm install

# 构建应用程序
RUN npm run build

# 安装 Nginx 服务器
RUN apt-get update && apt-get install -y nginx

# 复制 Nginx 配置文件到容器中
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 将应用程序文件复制到 Nginx 的默认网站目录中
RUN cp -r ./build/* /usr/share/nginx/html/

# 暴露容器的 80 端口
EXPOSE 80

# 定义容器启动时执行的命令，启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
