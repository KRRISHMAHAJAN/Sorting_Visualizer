function Insertion() {
    // Setting Time Complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Setting Space Complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (let i = 0; i < array_size; i++) {
        div_update(divs[i], div_sizes[i], "yellow"); // Highlight current element

        let j = i;
        let key = div_sizes[j];

        while (j > 0 && div_sizes[j - 1] > key) {
            div_update(divs[j - 1], div_sizes[j - 1], "red"); // Highlight elements being compared
            div_update(divs[j], div_sizes[j], "red");

            // Swap
            div_sizes[j] = div_sizes[j - 1];
            div_update(divs[j], div_sizes[j], "red"); // Height update after swap

            div_update(divs[j - 1], div_sizes[j - 1], "blue"); // Restore previous element color
            j--;
        }

        div_sizes[j] = key;
        div_update(divs[j], div_sizes[j], "red"); // Height update after placing element

        // Mark sorted elements in green
        for (let t = 0; t <= i; t++) {
            div_update(divs[t], div_sizes[t], "green");
        }
    }

    enable_buttons();
}
