<!DOCTYPE html><html><head><meta charset=utf-8><title></title><link rel=stylesheet id=style href=""><link href=/static/css/app.ebe5a471803432fdf24b7c9d4c9173ef.css rel=stylesheet></head><body><div id=app><div class=init-box><style type=text/css>.svg-icon{
            width: 40px;
            height: 40px;
            stroke: #343640;
            stroke-width: 2;
            stroke-linecap: round;
          }
          .svg-icon .path{
            fill: none;
          }
          .m-wipe{
            background: none;
            animation: loading-rotate 2s linear infinite;
          }
          .m-wipe .path{
            background: none;
            stroke-dasharray: 90,150;
            stroke-dashoffset: 0;
            stroke-linecap: round;
            stroke-width: 2px;
            stroke: #20a0ff;
            stroke-linecap: round;
            animation: loading-wipe 1.5s ease-in-out infinite;
          }
          .m-loading{
            background: none;
            animation: loading-rotate 0.8s linear infinite;
          }
          @keyframes loading-rotate{
            to{transform:rotate(1turn)}
          }
          @keyframes loading-wipe{
            0%{
              stroke-dasharray:1,200;
              stroke-dashoffset:0;
            }
            50%{
              stroke-dasharray:90,150;
              stroke-dashoffset:-40px;
            }
            to{
              stroke-dasharray:90,150;
              stroke-dashoffset:-120px;
            }
          }
          .init-box{
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .init-box .init-loading{
            width: 128px;
            height: 128px;
          }
          .init-box .init-tips{
            color: #8B90A0;
          }</style><div><svg viewBox="0 0 50 50" class="svg-icon m-loading init-loading"><circle cx=25 cy=25 r=20 fill=none stroke=#F2F2F2 class=path></circle><circle cx=25 cy=25 r=20 fill=none stroke=#24A2FF stroke-dasharray=60,150 class=path></circle></svg></div><p class=init-tips>初次加载，请耐心等待...</p></div></div><script type=text/javascript src=/static/js/manifest.9a8e890e078dec03e23c.js></script><script type=text/javascript src=/static/js/vendor.3685ee7e0e2f33bdb85f.js></script><script type=text/javascript src=/static/js/app.bbcad92994ed2d5aa7a1.js></script></body></html>