
# 服务器信息


# 进入项目根目录，执行 pnpm build
# cd /path/to/your/project
pnpm build

# 将 build 文件夹上传到云服务器
echo "开始执行脚本：$(date) 将 build 文件夹上传到云服务器" 
sshpass -p "$SSH_PASSWORD" scp -r -P $SSH_PORT ./build $SSH_USER@$SSH_HOST:/tmp

# 清空云服务器的 /var/www/html/ 文件夹
echo "正在清空历史数据..." 
sshpass -p "$SSH_PASSWORD" ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "sudo rm -rf $REMOTE_DIR/*"

# 将 build 文件夹里的所有文件复制到 /var/www/html/ 目录中
echo "正在更新文件..." 
sshpass -p "$SSH_PASSWORD" ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "sudo cp -r /tmp/build/* $REMOTE_DIR/"

# 删除云服务器上的临时文件夹
echo "正在删除临时文件..." 
sshpass -p "$SSH_PASSWORD" ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "sudo rm -rf /tmp/build"

echo "$(date) 脚本执行完成，更新成功!!!" 

