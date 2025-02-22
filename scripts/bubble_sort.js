function Bubble() {
    // Setting Time Complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Setting Space Complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (let i = array_size - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            div_update(divs[j], div_sizes[j], "yellow"); // Highlight the elements being compared

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red"); // Highlight swap
                div_update(divs[j + 1], div_sizes[j + 1], "red"); // Highlight swap

                // Swap elements
                let temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "red"); // Height update
                div_update(divs[j + 1], div_sizes[j + 1], "red"); // Height update
            }
            div_update(divs[j], div_sizes[j], "blue"); // Reset color
        }
        div_update(divs[i], div_sizes[i], "green"); // Mark sorted element
    }

    enable_buttons();
}
