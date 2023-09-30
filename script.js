function convertName() {
    const nameInput = document.getElementById("nameInput").value;
    const resultDiv = document.getElementById("result");

    // قائمة بالأشكال الممكنة للتحويل
    const convertedNames = [
        `🍒  🎀  ${nameInput}  🎀  🍒`,
        `Ｄｅｍｏｎ`,
        `𝔻𝕖𝕞𝕠𝕟`,
        `𝒟𝑒𝓂𝑜𝓃`,
        `𝓓𝓮𝓶𝓸𝓷`
    ];

    // عرض الأشكال المحولة
    resultDiv.innerHTML = "<h2>الأشكال المحولة:</h2>";
    convertedNames.forEach(name => {
        resultDiv.innerHTML += `<p>${name}</p>`;
    });
}