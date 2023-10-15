
## 구현된 화면

<img src="../3D button/3D-button.gif" width="50%">

<!-- ![793354a4-e94a-4954-8714-3deb15ce43fe](https://github.com/jinho-22/webd/assets/129517591/e81ac6d1-78f2-4d57-aad3-f7b7546fccb1) --> 
```
span:nth-child(1) a:before {
    color: #fff;
    background-color: #000;
    transform: rotateY(0deg) translateZ(25px);
}

span:nth-child(1) a::after {
    color: #000;
    transform: rotateX(90deg) translateZ(25px);
}

span:nth-child(2) a:before {
    color: #fff;
    background-color: #000;
    transform: rotateX(-90deg) translateZ(25px);
}

span:nth-child(2) a::after {
    color: #000;
    transform: rotateY(0deg) translateZ(25px);
}

span:nth-child(1) a:hover {
    transform: translateZ(-25px) rotateX(-90deg);
}

span:nth-child(2) a:hover {
    transform: translateZ(-25px) rotateX(90deg);
}
```
