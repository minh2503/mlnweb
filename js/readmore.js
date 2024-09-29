function toggleText(textIds, btnId) {
    const textIdArray = textIds.split(',');
    const hiddenTexts = textIdArray.map(id => document.getElementById(id));
    const readMoreBtn = document.getElementById(btnId);

    const isHidden = hiddenTexts[0].style.display === "none" || hiddenTexts[0].style.display === "";

    hiddenTexts.forEach(hiddenText => {
        hiddenText.style.display = isHidden ? "block" : "none";
    });

    readMoreBtn.innerText = isHidden ? "Read Less" : "Read More";
}

// Đảm bảo các đoạn text được ẩn khi trang tải
window.onload = function () {
    const hiddenTexts = document.querySelectorAll(".hidden-text");
    hiddenTexts.forEach(function (hiddenText) {
        hiddenText.style.display = "none";
    });
};