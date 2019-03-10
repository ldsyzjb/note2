## TCP 三次握手，四次挥手

1. 三次握手，是指服务端和客户端建立链接总共需要发送三个包才能完成链接；
    1. **SYN_SEND:** SYN=1, seq = x
    2. **SYN_RECV:** SYN=1, ACK=1, ack=x+1, seq=y
    3. **ESTABLISHED:** SYN=0, ACK=1, ack=y+1, seq=x+1

2. 四次挥手
    1. **FINSH-WAIT:** FIN=1, seq=u
    2. **CLOSE-WATI:** ACK=1, seq=v, ack=u+1
    3. **LAST-ACK:** FIN=1, ACK=1, seq=w, ack=u+1
    4. **TIME-WAIT:** ACK=1, seq=u+1, ack=w+1
   

## 
1. seq： 序列号
2. ack： 确认号
3. ACK： 确认
4. SYN： 同步
5. FIN： 终止

![tcp-establish][tcp-establish]
![avatar][tcp-break]




[tcp-break]:./imgs/tcp-break.png
[tcp-establish]:./imgs/tcp-establish.png