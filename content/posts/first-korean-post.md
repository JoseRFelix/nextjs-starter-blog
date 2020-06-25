---
title: 첫번째 한글 포스트입니다.
description: 기념비적인 한글 포스팅입니다.
date: 2020-06-25T13:56:00.000Z
---

# 제일 큰 글자

## 두번째로 큰 글자

### 세번째로 큰 글자입니다.

일반 글자입니다.

```nginx
server {
listen 80;
listen [::]:80;
server_name admin.yoursitename.com;  #자신의 주소로 바꾸세요.
location / {
	rewrite       ^/(.*)$ https://admin.yoursitename.com/$1 permanent; #자신의 주소로 바꾸세요.
	}
} 

server {
listen 443 ssl http2;
listen [::]:443 ssl http2;
server_tokens off;
client_max_body_size 100M;
include snippets/wp-ssl.conf;

#IP 차단 부분입니다. 밑의 내용을 수정 후 앞에 #을 빼면 IP차단이 적용됩니다.
#allow xxx.xxx.xxx.xxx; #자신의 집 컴퓨터의 외부IP를 확인 후 넣고 앞에 #을 제거하면 됩니다.
#allow 192.168.1.1; # 자신의 컴퓨터에 설치했다면 이것도 추가합니다. 추가 후 #을 제거
#deny all; # 위 아이피 이외에 모든 IP를 차단합니다. 

server_name admin.yoursitename.com; #자신의 주소로 바꾸세요.

location / {
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	proxy_set_header X-Forwarded-Proto $scheme;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header Host $http_host;
	proxy_pass https://127.0.0.1:7080;
	}	
}
```

Nginx 형식도 이해하는지 코드 체크해봅니다.

![big-ben](first-korean-post/big-ben.jpg)

빅벤입니다.

---

![train](first-korean-post/train.jpg)

지하철입니다.