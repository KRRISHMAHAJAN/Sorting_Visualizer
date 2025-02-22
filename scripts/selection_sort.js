function Selection() {
    // Setting Time Complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";

    // Setting Space Complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (let i = 0; i < array_size - 1; i++) {
        let mini = i;
        div_update(divs[i], div_sizes[i], "red"); // Highlight the current index

        for (let j = i + 1; j < array_size; j++) {
            div_update(divs[j], div_sizes[j], "yellow"); // Highlight the comparing element

            if (div_sizes[j] < div_sizes[mini]) {
                if (mini !== i) {
                    div_update(divs[mini], div_sizes[mini], "blue"); // Reset previous minimum
                }
                mini = j;
                div_update(divs[mini], div_sizes[mini], "red"); // Highlight new minimum
            } else {
                div_update(divs[j], div_sizes[j], "blue"); // Reset color of compared element
            }
        }

        if (mini !== i) {
            // Swap
            let temp = div_sizes[mini];
            div_sizes[mini] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[mini], div_sizes[mini], "red"); // Height update
            div_update(divs[i], div_sizes[i], "red"); // Height update
            div_update(divs[mini], div_sizes[mini], "blue"); // Reset color
        }

        div_update(divs[i], div_sizes[i], "green"); // Mark sorted element
    }

    div_update(divs[array_size - 1], div_sizes[array_size - 1], "green"); // Mark last element

    enable_buttons();
}
