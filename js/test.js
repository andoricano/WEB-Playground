function showFirstParagraph() {
    const allElements = document.querySelectorAll("*");
    console.log(allElements); // 요소 객체 출력
    allElements.forEach(el => {
        console.log(el, getComputedStyle(el).backgroundColor);
    });
}