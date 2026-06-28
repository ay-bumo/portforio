// 背景の球を取得
const circles = document.querySelectorAll('.bg-circle');

// マウスの現在位置と、アニメーション用の目標位置
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// マウスが動いたときに座標を更新（画面の中心を 0, 0 とする）
window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2);
    mouseY = (e.clientY - window.innerHeight / 2);
});

// 毎フレーム実行されるアニメーション関数
function animate() {
    // 現在の位置を目標位置にじわじわ近づける（0.05 を大きくすると動きが早くなります）
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    // 各球に少しずつ違う変化量（パララックス効果）を与えて動かす
    // 割る数を変えることで、奥と手前で動くスピードが変わります
    circles.forEach((circle, index) => {
        const speedMultiplier = (index + 1) * 15; // 球ごとに動く幅を変える
        const x = -currentX / speedMultiplier;
        const y = -currentY / speedMultiplier;
        
        circle.style.transform = `translate(${x}px, ${y}px)`;
    });

    // 次のフレームを要求
    requestAnimationFrame(animate);
}

// アニメーションを開始
animate();