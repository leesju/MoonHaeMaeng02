
let myBtns = document.querySelectorAll('.btn');

let home = document.querySelector('#goHome');

let imgSrc = [
    {//인덱스페이지
        image:{
            src0:'img01/ban_1.png',
            src1:'img01/go_1.png',
            src2:'img01/ori_3.png',
            src3:'img01/gal_text.png'
        }
    },
    { // 1번 페이지 공사다망
        image:{
            src0:'img01/gong_1.png',
            src1:'img01/gong_2.png',
            src2:'img01/gong_text.png',
            src3:'img01/gong_3.png'
        }
    },
    { // 2번 페이지 두문불출
        image:{
            src0:'img01/do_1.png',
            src1:'img01/do_2.png',
            src2:'img01/do_text.png',
            src3:'img01/do_3.png'
        }
    },
    { // 3번 페이지 주전부리
        image:{
            src0:'img01/ju_1.png',
            src1:'img01/ju_2.png',
            src2:'img01/ju_text.png',
            src3:'img01/ju_3.png'
        }
    },
    { // 4번 페이지 홍익인간
        image:{
            src0:'img01/hong_1.png',
            src1:'img01/hong_2.png',
            src2:'img01/hong_text.png',
            src3:'img01/hong_3.png'
        }
    },
    { // 5번 페이지 반신반의
        image:{
            src0:'img01/ban_1.png',
            src1:'img01/ban_2.png',
            src2:'img01/ban_text.png',
            src3:'img01/ban_3.png'
        }
    },    
    { // 6번 페이지 섬섬옥수
        image:{
            src0:'img01/seom_1.png',
            src1:'img01/seom_2.png',
            src2:'img01/seom_text.png',
            src3:'img01/seom_3.png'
        }
    },    
    { // 7번 페이지 말쑥하다
        image:{
            src0:'img01/mal_1.png',
            src1:'img01/mal_2.png',
            src2:'img01/mal_text.png',
            src3:'img01/mal_3.png'
        }
    },  
    { // 8번 페이지 가제
        image:{
            src0:'img01/ga_1.png',
            src1:'img01/ga_2.png',
            src2:'img01/ga_text.png',
            src3:'img01/ga_3.png'
        }
    },
    { // 9번 페이지 새우잠
        image:{
            src0:'img01/sae_1.png',
            src1:'img01/sae_4.png',
            src2:'img01/sae_2.png',
            src3:'img01/sae_3.png'
        }    
    },
    { // 10번 페이지 갈무리
        image:{
            src0:'img01/gal_1.png', //주황
            src1:'img01/gal_text.png', //초록
            src2:'img01/gal_3.png', //파랑
            src3:'img01/gal_2.png' //분홍
        }    
    },
    { // 11번 페이지 고지식
        image:{
            src0:'img01/go_1.png', //주황
            src1:'img01/go_2.png', //초록
            src2:'img01/go_3.png', //파랑
            src3:'img01/go_text.png' //분홍
        }    
    },
    { // 12번 페이지 지구력
        image:{
            src0:'img01/ji_1.png', //주황
            src1:'img01/ji_text.png', //초록
            src2:'img01/ji_2.png', //파랑
            src3:'img01/ji_3.png' //분홍
        }    
    },
    { // 13번 페이지 대관절
        image:{
            src0:'img01/dae_1.png', //주황
            src1:'img01/dae_2.png', //초록
            src2:'img01/dae_3.png', //파랑
            src3:'img01/dae_text.png' //분홍
        }    
    },
    { // 14번 페이지 호랑말코
        image:{
            src0:'img01/ho_3.png', //주황
            src1:'img01/ho_2.png', //초록
            src2:'img01/ho_text.png', //파랑
            src3:'img01/ho_1.png' //분홍
        }    
    },
    { // 15번 페이지 오리무중
        image:{
            src0:'img01/ori_1.png', //주황
            src1:'img01/ori_2.png', //초록
            src2:'img01/oh_text.png', //파랑
            src3:'img01/ori_3.png' //분홍
        }    
    },
];  

let textSrc = [
    { // 0번 페이지 
        title:'문해맹 (文解盲)', // 텍스트 창
        text: '글을 읽을 수는 있지만 그 뜻하는 바와 맥락을 잘 이해하지 못하는 경우를 이른다. <br> 유의어: 실질적 문맹 <br><br> ' 
    },
    { // 1번 페이지 
        title:'공사다망 (公私多忙)', // 텍스트 창
        text: '[명사] 공적ㆍ사적인 일 따위로 매우 바쁨.'
    },
    { // 2번 페이지 
        title:'두문불출 (杜門不出)', 
        text: '[명사] <br>1. 집에만 있고 바깥출입을 아니함. <br>2. 집에서 은거하면서 관직에 나가지 아니하거나 사회의 일을 하지 아니함을 비유적으로 이르는 말.'
    },
    { // 3 페이지 
        title:'주전부리', 
        text: '[명사] <br>1. 때를 가리지 아니하고 군음식을 자꾸 먹음. 또는 그런 입버릇. <br>2. 맛이나 재미, 심심풀이로 먹는 음식.'
    },
    { // 4 페이지 
        title:'홍익인간 (弘益人間)', 
        text: '[명사] <br>널리 인간을 이롭게 함. 단군의 건국 이념으로서 <br> 우리나라 정치, 교육, 문화의 최고 이념이다.'
    },
    { // 5 페이지 
        title:'반신반의 (半信半疑)', 
        text: '[명사] <br>얼마쯤 믿으면서도 한편으로는 의심함.'
    },
    { // 6 페이지 
        title:'섬섬옥수 (纖纖玉手)', 
        text: '[명사] <br>가냘프고 고운 여자의 손을 이르는 말.'
    },
    { // 7 페이지 
        title:'말쑥하다', 
        text: '[형용사] <br>1. 지저분함이 없이 말끔하고 깨끗하다. <br>2. 세련되고 아담하다.'
    },
    { // 8번 페이지 
        title:'가제 (假題)', 
        text: '[명사] <br> 임시로 붙인 제목. '
    },
    { // 9번 페이지 
        title:'새우잠', 
        text: '[명사] <br> 새우처럼 등을 구부리고 자는 잠. 주로 모로 누워 불편하게 <br> 자는 잠을 의미한다.'
    },
    { // 10번 페이지 
        title:'갈무리', 
        text: '[명사] <br> 1. 물건 따위를 잘 정리하거나 간수함. <br> 2. 일을 처리하여 마무리함.'
    },
    { // 11번 페이지 
        title:'고지식-하다', 
        text: '[형용사] <br> 성질이 외곬으로 곧아 융통성이 없다. '
    },
    { // 12번 페이지 
        title:'지구력 (持久力)', 
        text: '[명사] <br> 오랫동안 버티며 견디는 힘. '
    },
    { // 13번 페이지 
        title:'대관절 (大關節) ', 
        text: '[부사] <br> 여러 말 할 것 없이 요점만 말하건대. '
    },
    { // 14번 페이지 
        title:'호랑말코', 
        text: '[명사] <br> 고집이 세어서 엉뚱한 짓을 잘하는 자를 욕하여 이르는 말. '
    },
    { // 15번 페이지 
        title:'오리무중 (五里霧中) ', 
        text: '[명사] <br> 오 리나 되는 짙은 안개 속에 있다는 뜻으로, 무슨 일에 대하여 <br> 방향이나 갈피를 잡을 수 없음을 이르는 말. '
    },

];

let window0 = document.querySelector('#window_content01');
let window1 = document.querySelector('#window_content02');
let window2 = document.querySelector('#window_content03');
let window3 = document.querySelector('#window_content04');
let window4 = document.querySelector('#window_content05');

let imgBox = document.querySelectorAll('.imgBox');

let cTitle = document.querySelector('#ctTitle');
let cText = document.querySelector('#ctText');

let targetPos = [
    { // 0번 페이지 
        pos0:{ x: 200, y: 35}, // 첫번째 창
        pos1:{ x: 50, y: 400},
        pos2:{ x: 275, y: 680},
        pos3:{ x: 500, y: 100},
        pos4:{ x: 800, y: 450}
    },
    { // 1번 페이지 
        pos0:{ x: 500, y: 650}, // 첫번째 창
        pos1:{ x: 200, y: 400},
        pos2:{ x: 20, y: 20},
        pos3:{ x: 500, y: 100},
        pos4:{ x: 850, y: 500}
    },
    { // 2번 페이지 
        pos0:{ x: 10, y: 70}, // 첫번째 창
        pos1:{ x: 800, y: 30}, // 초록
        pos2:{ x: 700, y: 680}, // 설명
        pos3:{ x: 60, y: 420}, // 파랑
        pos4:{ x: 550, y: 120} //분홍
    },
    { // 3번 페이지 주전부리
        pos0:{ x: 980, y: 730}, // 주황
        pos1:{ x: 850, y: 100}, // 초록
        pos2:{ x: 50, y: 550}, // 설명
        pos3:{ x: 10, y: 20}, // 파랑
        pos4:{ x: 550, y: 400} //분홍
    },
    { // 4번 페이지 홍익인간
        pos0:{ x: 500, y: 30}, // 주황
        pos1:{ x: 10, y: 50}, // 초록
        pos2:{ x: 80, y: 650}, // 설명
        pos3:{ x: 450, y: 340}, // 파랑
        pos4:{ x: 900, y: 250} //분홍
    },    
    { // 5번 페이지 반신반의
        pos0:{ x: 600, y: 130}, // 주황
        pos1:{ x: 850, y: 400}, // 초록
        pos2:{ x: 930, y: 300}, // 설명
        pos3:{ x: 250, y: 540}, // 파랑
        pos4:{ x: 20, y: 20} //분홍
    },  
    { // 6번 페이지 섬섬옥수
        pos0:{ x: 550, y: 750}, // 주황
        pos1:{ x: 10, y: 20}, // 초록
        pos2:{ x: 780, y: 70}, // 설명
        pos3:{ x: 250, y: 240}, // 파랑
        pos4:{ x: 750, y: 380} //분홍
    },
    { // 7번 페이지 말쑥하다
        pos0:{ x: 350, y: 650}, // 주황
        pos1:{ x: 590, y: 20}, // 초록
        pos2:{ x: 80, y: 570}, // 설명
        pos3:{ x: 550, y: 440}, // 파랑
        pos4:{ x: 50, y: 110} //분홍
    },
    { // 8번 페이지 가제
        pos0:{ x: 500, y: 650}, //주황
        pos1:{ x: 120, y: 400}, //초록
        pos2:{ x: 100, y: 70}, //설명창
        pos3:{ x: 500, y: 100}, //파랑
        pos4:{ x: 850, y: 500} //분홍
    },
    { // 9번 페이지 새우잠
        pos0:{ x: 150, y: 50}, //주황
        pos1:{ x: 500, y: 100}, //초록
        pos2:{ x: 200, y: 700}, //설명창
        pos3:{ x: 825, y: 500}, //파랑
        pos4:{ x: 50, y: 260} //분홍
    },
    { // 10번 페이지 갈무리
        pos0:{ x: 100, y: 600}, //주황
        pos1:{ x: 300, y: 200}, //초록
        pos2:{ x: 40, y: 100}, //설명창
        pos3:{ x: 900, y: 500}, //파랑
        pos4:{ x: 900, y: 50} //분홍
    },
    { // 11번 페이지 고지식
        pos0:{ x: 150, y: 40}, //주황
        pos1:{ x: 850, y: 50}, //초록
        pos2:{ x: 450, y: 750}, //설명창
        pos3:{ x: 900, y: 400}, //파랑
        pos4:{ x: 70, y: 300} //분홍
    },
    { // 12번 페이지 지구력
        pos0:{ x: 150, y: 450}, //주황
        pos1:{ x: 400, y: 130}, //초록
        pos2:{ x: 350, y: 700}, //설명창
        pos3:{ x: 50, y: 70}, //파랑
        pos4:{ x: 850, y: 600} //분홍
    },
    { // 13번 페이지 대관절
        pos0:{ x: 1050, y: 450}, //주황
        pos1:{ x: 800, y: 150}, //초록
        pos2:{ x: 350, y: 100}, //설명창
        pos3:{ x: 50, y: 150}, //파랑
        pos4:{ x: 250, y: 400} //분홍
    },
    { // 14번 페이지 호랑말코
        pos0:{ x: 800, y: 500}, //주황
        pos1:{ x: 30, y: 50}, //초록
        pos2:{ x: 100, y: 750}, //설명창
        pos3:{ x: 200, y: 200}, //파랑
        pos4:{ x: 850, y: 100} //분홍
    },
    { // 15번 페이지 오리무중
        pos0:{ x: 80, y: 50 }, //주황
        pos1:{ x: 900, y: 650 }, //초록
        pos2:{ x: 100, y: 700}, //설명창
        pos3:{ x: 500, y: 100}, //파랑
        pos4:{ x: 10, y: 300} //분홍
    },
];

let targetSize = [
    { // 0번 페이지 창들 크기 
        size0:{ width: 150, height: 300 },
        size1:{ width: 400, height: 320 },
        size2:{ width: 620, height: 165 },
        size3:{ width: 600, height: 400 },
        size4:{ width: 400, height: 300 }
    },
    {//1번 페이지 창들 크기
        size0:{ width: 300, height: 236 },
        size1:{ width: 230, height: 400 },
        size2:{ width: 430, height: 134 },
        size3:{ width: 700, height: 509 },
        size4:{ width: 388, height: 368 }
    },
    {//2번 페이지 창들 크기
        size0:{ width: 200, height: 236 }, //주황
        size1:{ width: 430, height: 600 }, // 초록
        size2:{ width: 430, height: 228 }, //설명
        size3:{ width: 600, height: 409 }, //파랑
        size4:{ width: 388, height: 400 } //분홍
    },
    {//3번 페이지 창들 크기
        size0:{ width: 150, height: 185 }, //주황
        size1:{ width: 330, height: 350 }, // 초록
        size2:{ width: 350, height: 220 }, //설명
        size3:{ width: 700, height: 509 }, //파랑
        size4:{ width: 400, height: 412 } //분홍
    },
    {//4번 페이지 창들 크기 홍익인간
        size0:{ width: 200, height: 235 }, //주황
        size1:{ width: 330, height: 350 }, // 초록
        size2:{ width: 450, height: 190 }, //설명
        size3:{ width: 750, height: 559 }, //파랑
        size4:{ width: 150, height: 182 } //분홍
    },
    {//5번 페이지 창들 크기
        size0:{ width: 150, height: 300 }, //주황
        size1:{ width: 250, height: 500 }, // 초록
        size2:{ width: 310, height: 160 }, //설명
        size3:{ width: 450, height: 259 }, //파랑
        size4:{ width: 550, height: 582 } //분홍
    },
    {//6번 페이지 창들 크기
        size0:{ width: 240, height: 160 }, //주황
        size1:{ width: 450, height: 480 }, // 초록
        size2:{ width: 310, height: 160 }, //설명
        size3:{ width: 650, height: 459 }, //파랑
        size4:{ width: 450, height: 282 } //분홍
    },
    {//7번 페이지 창들 크기
        size0:{ width: 340, height: 260 }, //주황
        size1:{ width: 650, height: 480 }, // 초록
        size2:{ width: 310, height: 190 }, //설명
        size3:{ width: 550, height: 359 }, //파랑
        size4:{ width: 450, height: 382 } //분홍
    },
    {//8번 페이지 창들 크기 가제
        size0:{ width: 300, height: 270 },  //주황
        size1:{ width: 400, height: 350 },  //초록
        size2:{ width: 300, height: 155 },  //설명창
        size3:{ width: 700, height: 509 },  //파랑
        size4:{ width: 388, height: 368 }   //분홍
    },
    {//9번 페이지 창들 크기 새우잠
        size0:{ width: 300, height: 270 },  //주황
        size1:{ width: 700, height: 500},  //초록
        size2:{ width: 450, height: 190 },  //설명창
        size3:{ width: 400, height: 350 },  //파랑
        size4:{ width: 340, height: 300 }   //분홍
    },
    {//10번 페이지 창들 크기 갈무리
        size0:{ width: 280, height: 250 },  //주황
        size1:{ width: 500, height: 500},  //초록
        size2:{ width: 300, height: 190 },  //설명창
        size3:{ width: 300, height: 350 },  //파랑
        size4:{ width: 200, height: 280 }   //분홍
    },
    {//11번 페이지 창들 크기 고지식
        size0:{ width: 280, height: 240 },  //주황
        size1:{ width: 210, height: 400},  //초록
        size2:{ width: 320, height: 160 },  //설명창
        size3:{ width: 300, height: 350 },  //파랑
        size4:{ width: 700, height: 380 }   //분홍
    },
    {//12번 페이지 창들 크기 지구력
        size0:{ width: 180, height: 230 },  //주황
        size1:{ width: 600, height: 600 },  //초록
        size2:{ width: 270, height: 160 },  //설명창
        size3:{ width: 270, height: 300 },  //파랑
        size4:{ width: 360, height: 300 }   //분홍
    },
    {//13번 페이지 창들 크기 대관절
        size0:{ width: 150, height: 250 },  //주황
        size1:{ width: 220, height: 340 },  //초록
        size2:{ width: 300, height: 160 },  //설명창
        size3:{ width: 270, height: 390 },  //파랑
        size4:{ width: 700, height: 500 }   //분홍
    },
    {//14번 페이지 창들 크기 호랑말코
        size0:{ width: 450, height: 400 },  //주황
        size1:{ width: 230, height: 450 },  //초록
        size2:{ width: 450, height: 160 },  //설명창
        size3:{ width: 700, height: 500 },  //파랑
        size4:{ width: 200, height: 230}   //분홍
    },
    {//15번 페이지 창들 크기 오리무중
        size0:{ width: 230, height: 200 },  //주황
        size1:{ width: 300, height: 250},  //초록
        size2:{ width: 470, height: 190 },  //설명창
        size3:{ width: 650, height: 650 },  //파랑
        size4:{ width: 430, height: 310 }   //분홍
    },
         
];

let nowPos = [
    { // 현재 페이지.
        pos0:{ x: 200, y: 35}, // 첫번째 창
        pos1:{ x: 50, y: 400},
        pos2:{ x: 275, y: 680},
        pos3:{ x: 500, y: 100},
        pos4:{ x: 800, y: 450}
    }
];

let nowSize = [
    { // 0번 페이지 창들 크기 
        size0:{ width: 150, height: 300 },
        size1:{ width: 400, height: 320 },
        size2:{ width: 600, height: 150 },
        size3:{ width: 600, height: 400 },
        size4:{ width: 400, height: 300 }
    }
];

for(let i = 0; i < myBtns.length; i++){
    myBtns[i].addEventListener('click', clickFn);
}

home.addEventListener('click', goHome)

function goHome()
{
    gotoMenu(0);
}

function clickFn(e)
{   
   // console.log(e.path[0].getAttribute('clickVal')+1);
    gotoMenu(parseInt(e.path[0].getAttribute('clickVal'))+1);
}

let tempX, tempY;
let tempW, tempH;

let myAnimation;

let nowScene = 0;

function gotoMenu(btnNum)
{
    nowScene = btnNum;

    myAnimation = requestAnimationFrame(changeWindow);

    console.log("콘텐츠를 바꿉니다.");

    console.log('메인 페이지입니다.');
    imgBox[0].src = imgSrc[btnNum].image.src0;
    imgBox[1].src = imgSrc[btnNum].image.src1;
    imgBox[2].src = imgSrc[btnNum].image.src2;
    imgBox[3].src = imgSrc[btnNum].image.src3;

    cTitle.innerHTML = textSrc[btnNum].title;
    cText.innerHTML = textSrc[btnNum].text;

}

let g = 0.015;

function changeWindow()
{
    console.log("nowPos[0].pos0.x===" + nowPos[0].pos0.x);
    nowPos[0].pos0.x += (targetPos[nowScene].pos0.x - nowPos[0].pos0.x) * g;
    nowPos[0].pos0.y += (targetPos[nowScene].pos0.y - nowPos[0].pos0.y) * g;

    nowPos[0].pos1.x += (targetPos[nowScene].pos1.x - nowPos[0].pos1.x) * g;
    nowPos[0].pos1.y += (targetPos[nowScene].pos1.y - nowPos[0].pos1.y) * g;

    nowPos[0].pos2.x += (targetPos[nowScene].pos2.x - nowPos[0].pos2.x) * g;
    nowPos[0].pos2.y += (targetPos[nowScene].pos2.y - nowPos[0].pos2.y) * g;

    nowPos[0].pos3.x += (targetPos[nowScene].pos3.x - nowPos[0].pos3.x) * g;
    nowPos[0].pos3.y += (targetPos[nowScene].pos3.y - nowPos[0].pos3.y) * g;

    nowPos[0].pos4.x += (targetPos[nowScene].pos4.x - nowPos[0].pos4.x) * g;
    nowPos[0].pos4.y += (targetPos[nowScene].pos4.y - nowPos[0].pos4.y) * g;

    nowSize[0].size0.width += (targetSize[nowScene].size0.width - nowSize[0].size0.width) * g;
    nowSize[0].size0.height += (targetSize[nowScene].size0.height - nowSize[0].size0.height) * g;

    nowSize[0].size1.width += (targetSize[nowScene].size1.width - nowSize[0].size1.width) * g;
    nowSize[0].size1.height += (targetSize[nowScene].size1.height - nowSize[0].size1.height) * g;

    nowSize[0].size2.width += (targetSize[nowScene].size2.width - nowSize[0].size2.width) * g;
    nowSize[0].size2.height += (targetSize[nowScene].size2.height - nowSize[0].size2.height) * g;

    nowSize[0].size3.width += (targetSize[nowScene].size3.width - nowSize[0].size3.width) * g;
    nowSize[0].size3.height += (targetSize[nowScene].size3.height - nowSize[0].size3.height) * g;

    nowSize[0].size4.width += (targetSize[nowScene].size4.width - nowSize[0].size4.width) * g;
    nowSize[0].size4.height += (targetSize[nowScene].size4.height - nowSize[0].size4.height) * g;

    window0.style.left = nowPos[0].pos0.x + 'px';
    window0.style.top = nowPos[0].pos0.y  + 'px';
    window0.style.width = nowSize[0].size0.width  + 'px';
    window0.style.height = nowSize[0].size0.height  + 'px';

    window1.style.left = nowPos[0].pos1.x  + 'px';
    window1.style.top = nowPos[0].pos1.y  + 'px';
    window1.style.width = nowSize[0].size1.width  + 'px';
    window1.style.height = nowSize[0].size1.height  + 'px';

    window2.style.left = nowPos[0].pos2.x  + 'px';
    window2.style.top = nowPos[0].pos2.y  + 'px';
    window2.style.width = nowSize[0].size2.width  + 'px';
    window2.style.height = nowSize[0].size2.height  + 'px';

    window3.style.left = nowPos[0].pos3.x  + 'px';
    window3.style.top = nowPos[0].pos3.y  + 'px';
    window3.style.width = nowSize[0].size3.width  + 'px';
    window3.style.height = nowSize[0].size3.height  + 'px';

    window4.style.left = nowPos[0].pos4.x  + 'px';
    window4.style.top = nowPos[0].pos4.y  + 'px';
    window4.style.width = nowSize[0].size4.width  + 'px';
    window4.style.height = nowSize[0].size4.height  + 'px';

    requestAnimationFrame(changeWindow);
}


function init()
{
    gotoMenu(0);
}

init();