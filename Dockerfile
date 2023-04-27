# 使用Nginx作为Web服务器
FROM nginx

# 将site文件夹中的文件复制到容器的html目录
COPY site /usr/share/nginx/html

# 将容器内部的80端口映射到主机上的80端口
EXPOSE 80

# 启动Nginx Web服务器
CMD ["nginx", "-g", "daemon off;"]

